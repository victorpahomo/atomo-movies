import React, { useEffect } from "react";
import MarginLayout from "@/components/layouts/margin-layout/MarginLayout";
import MainLayout from "@/components/layouts/main-layout/MainLayout";
import CardsSkeleton from "@/components/ui/skeleton/CardsSkeleton";
import SortSelect from "@/components/ui/sort-select/SortSelect";
import { useDiscoverMovies } from "@/hooks/useDiscoverMovies";
import MovieCard from "@/components/ui/card/MovieCard";

import "./Movies.css";

export default function MoviesView() {
  const { movies, loading, error, hasMore, setPage, setSort, isRefreshing } =
    useDiscoverMovies();

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
    setSort(event.target.value);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <MainLayout>
      <MarginLayout>
        <div className="movies-header">
          <h2>Descubre Películas</h2>
          <SortSelect onSortChange={handleSortChange} type="movies" />
        </div>

        {error && <p>Error: {error}</p>}
        <div className="movies-container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        {(loading || isRefreshing) && <CardsSkeleton />}
      </MarginLayout>
    </MainLayout>
  );
}
