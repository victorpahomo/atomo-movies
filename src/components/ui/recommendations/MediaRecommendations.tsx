import MarginLayout from "@/components/layouts/margin-layout/MarginLayout";
import MovieCard from "../card/MovieCard";
import { useMediaRecommendations } from "@/hooks/useMediaRecommendations";
import TvShowCard from "../card/TvShowCard";
import ScrollCardsLayout from "@/components/layouts/scroll-cards-layout/ScrollCardsLayout";

import "./MediaRecommendations.css";

const VALID_TYPES = ["tv", "movie"] as const;
type MediaType = (typeof VALID_TYPES)[number];

type MediaRecommendationsProps = {
  type: MediaType;
  id: number;
};

export default function MediaRecommendations({
  type,
  id,
}: MediaRecommendationsProps) {
  const { movieRecommendations, tvRecommendations, loading, error } =
    useMediaRecommendations(type, id);

  if (error) {
    return (
      <div className="recommendations__error-message">
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="recommendations__loading-message">
        <p>Cargando...</p>
      </div>
    );
  }

  const noRecommendations =
    (type === "movie" && !movieRecommendations?.length) ||
    (type === "tv" && !tvRecommendations?.length);

  if (noRecommendations) {
    return (
      <MarginLayout>
        <div className="recommendations__no-data-message">
          <p>No se encontraron recomendaciones.</p>
        </div>
      </MarginLayout>
    );
  }

  return (
    <MarginLayout>
      <div className="recommendations-container">
        <h2 className="recommendations__title">Recomendaciones</h2>
        <ScrollCardsLayout
          items={
            type === "movie"
              ? movieRecommendations.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))
              : tvRecommendations.map((tvShow) => (
                  <TvShowCard key={tvShow.id} tvShow={tvShow} />
                ))
          }
        />
      </div>
    </MarginLayout>
  );
}
