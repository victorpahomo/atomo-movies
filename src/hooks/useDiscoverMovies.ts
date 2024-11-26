import { useEffect, useState } from "react";

import { BASE_URL, API_TOKEN } from "@/utils/constants";
import { SORT_SHARED_OPTIONS } from "@/utils/constants";
import { Movie } from "@/types/movie.types";

export function useDiscoverMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [sort, setSort] = useState<string>(
    SORT_SHARED_OPTIONS.voteCount.valueDesc
  ); // Default sort

  const fetchDiscoverMovies = async (
    pageNumber: number,
    sortOption: string
  ) => {
    try {
      if (pageNumber === 1) setIsRefreshing(true); // refresh by sort
      setLoading(true);

      const response = await fetch(
        `${BASE_URL}/discover/movie?sort_by=${sortOption}&page=${pageNumber}&language=es-ES`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();

      // Add new TV shows to the list without duplicates
      setMovies((prevMovies) => {
        const movieIds = new Set(prevMovies.map((movie) => movie.id));
        const newMovies = data.results.filter(
          (movie: Movie) => !movieIds.has(movie.id)
        );
        return pageNumber === 1 ? newMovies : [...prevMovies, ...newMovies];
      });

      setHasMore(data.results.length > 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false);
      setIsRefreshing(false); // refresh by sort finished
    }
  };

  useEffect(() => {
    if (sort) {
      setMovies([]); // Clear the list.
      setPage(1); // Reset the page.
      fetchDiscoverMovies(1, sort); // Call the API with the new sort criteria.
    }
  }, [sort]);

  useEffect(() => {
    if (page > 1) fetchDiscoverMovies(page, sort); // Fetch more movies on page change
  }, [page]);

  return { movies, loading, error, hasMore, setPage, setSort, isRefreshing };
}
