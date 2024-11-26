import { useEffect } from "react";

import MarginLayout from "@/components/layouts/margin-layout/MarginLayout";
import MainLayout from "@/components/layouts/main-layout/MainLayout";
import CardsSkeleton from "@/components/ui/skeleton/CardsSkeleton";
import SortSelect from "@/components/ui/sort-select/SortSelect";
import { useDiscoverTvShows } from "@/hooks/useDiscoverTvShows";
import TvShowCard from "@/components/ui/card/TvShowCard";

import "./TvShows.css";

export default function TvShowsView() {
  const { tvShows, loading, error, hasMore, setPage, setSort, isRefreshing } =
    useDiscoverTvShows();

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (hasMore && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("value", event.target.value);
    setSort(event.target.value); // Update the sorting criteria
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  return (
    <MainLayout>
      <MarginLayout>
        <div className="tv-shows-header">
          <h2>Descubre Series de TV</h2>
          <SortSelect onSortChange={handleSortChange} />
        </div>

        {error && <p>Error: {error}</p>}
        <div className="tv-shows-container">
          {tvShows.map((tvShow) => (
            <TvShowCard tvShow={tvShow} key={tvShow.id} />
          ))}
        </div>
        {(loading || isRefreshing) && <CardsSkeleton />}
      </MarginLayout>
    </MainLayout>
  );
}
