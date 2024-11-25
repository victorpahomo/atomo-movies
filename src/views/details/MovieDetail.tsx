import { useParams } from "react-router";

import MediaRecommendations from "@/components/ui/recommendations/MediaRecommendations";
import MediaSectionSkeleton from "@/components/ui/skeleton/MediaSectionSkeleton";
import MainLayout from "@/components/layouts/main-layout/MainLayout";
import { BACKDROP_SIZES, POSTER_SIZES } from "@/utils/constants";
import MediaReview from "@/components/ui/review/MediaReview";
import MediaDetail from "@/components/ui/detail/MediaDetail";
import { generateImgPath } from "@/utils/generateImgPath";
import { useMovieDetail } from "@/hooks/useMovieDetail";

export default function MovieDetailView() {
  const { movieId } = useParams();
  const { movieDetail, loading, error } = useMovieDetail(Number(movieId));

  const backdropPath = generateImgPath({
    path: movieDetail?.backdrop_path,
    size: BACKDROP_SIZES.w1280,
  });
  const posterPath = generateImgPath({
    path: movieDetail?.poster_path,
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

  if (!movieDetail) {
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
        id={movieDetail?.id}
        type="movie"
        title={movieDetail?.title}
        backdropPath={backdropPath}
        posterPath={posterPath}
        releaseDate={movieDetail?.release_date}
        genres={movieDetail?.genres?.map((genre) => genre.name)}
        runtime={movieDetail?.runtime}
        originalTitle={movieDetail?.original_title}
        voteAverage={movieDetail?.vote_average}
        voteCount={movieDetail?.vote_count}
        tagline={movieDetail?.tagline}
        overview={movieDetail?.overview}
      />
      <MediaReview type="movie" id={movieDetail.id} />
      <MediaRecommendations type="movie" id={movieDetail.id} />
    </MainLayout>
  );
}
