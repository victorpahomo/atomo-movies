import ScrollCardsLayout from "@/components/layouts/scroll-cards-layout/ScrollCardsLayout";
import { useTrendingMovies } from "@/hooks/useTrendingMovies";
import MovieCard from "@/components/ui/card/MovieCard";

export default function TrendingMovies() {
  const { trendingMovies, loading, error } = useTrendingMovies();

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Ocurrió un error: {error}</p>;
  }

  return (
    <ScrollCardsLayout
      items={
        trendingMovies
          ?.slice(0, 10)
          .map((movie) => <MovieCard key={movie.id} movie={movie} />) || []
      }
      title="Top Películas de la semana"
      scrollDistance={200}
      className="trending-movies"
    />
  );
}
