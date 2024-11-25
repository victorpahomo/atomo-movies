import ScrollCardsLayout from "@/components/layouts/scroll-cards-layout/ScrollCardsLayout";
import { usePopularTvShows } from "@/hooks/usePopularTvShows";
import TvShowCard from "@/components/ui/card/TvShowCard";

export default function PopularTvShows() {
  const { popularTvShows, loading, error } = usePopularTvShows();

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Ocurrió un error: {error}</p>;
  }

  return (
    <ScrollCardsLayout
      items={
        popularTvShows
          ?.slice(0, 10)
          .map((tvShow) => <TvShowCard key={tvShow.id} tvShow={tvShow} />) || []
      }
      title="Series populares"
      scrollDistance={200}
      className="popular-tv-shows"
    />
  );
}
