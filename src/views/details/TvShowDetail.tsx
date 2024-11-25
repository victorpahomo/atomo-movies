import { useParams } from "react-router";

import MediaRecommendations from "@/components/ui/recommendations/MediaRecommendations";
import MediaSectionSkeleton from "@/components/ui/skeleton/MediaSectionSkeleton";
import MainLayout from "@/components/layouts/main-layout/MainLayout";
import { BACKDROP_SIZES, POSTER_SIZES } from "@/utils/constants";
import MediaReview from "@/components/ui/review/MediaReview";
import MediaDetail from "@/components/ui/detail/MediaDetail";
import { generateImgPath } from "@/utils/generateImgPath";
import { useTvShowDetail } from "@/hooks/useTvShowDetail";

export default function TvShowDetailView() {
  let { tvShowId } = useParams();
  const { tvShowDetail, loading, error } = useTvShowDetail(Number(tvShowId));

  const posterUrl = generateImgPath({
    path: tvShowDetail?.backdrop_path,
    size: BACKDROP_SIZES.w780,
  });
  const backdropUrl = generateImgPath({
    path: tvShowDetail?.poster_path,
    size: POSTER_SIZES.w342,
  });

  if (error) {
    return (
      <MainLayout>
        <div className="error-message">
          <p>{error}</p>
        </div>
      </MainLayout>
    );
  }

  if (loading) {
    return <MediaSectionSkeleton />;
  }

  if (!tvShowDetail) {
    return (
      <MainLayout>
        <div className="no-data-message">
          <p>No se encontraron detalles de la película.</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <MediaDetail
        id={tvShowDetail?.id}
        type="tv"
        title={tvShowDetail?.name}
        backdropPath={backdropUrl}
        posterPath={posterUrl}
        releaseDate={tvShowDetail?.first_air_date}
        genres={tvShowDetail?.genres?.map((genre) => genre.name)}
        seasons={tvShowDetail?.number_of_seasons}
        originalTitle={tvShowDetail?.original_name}
        voteAverage={tvShowDetail?.vote_average}
        voteCount={tvShowDetail?.vote_count}
        tagline={tvShowDetail?.tagline}
        overview={tvShowDetail?.overview}
      />
      <MediaReview type="tv" id={tvShowDetail.id} />
      <MediaRecommendations type="tv" id={tvShowDetail.id} />
    </MainLayout>
  );
}
