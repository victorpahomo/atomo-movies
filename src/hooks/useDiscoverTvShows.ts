import { useEffect, useState } from "react";
import { BASE_URL, API_TOKEN } from "@/utils/constants";
import { SORT_SHARED_OPTIONS } from "@/utils/constants";
import { TvShow } from "@/types/tvShow.types";

export function useDiscoverTvShows() {
  const [tvShows, setTvShows] = useState<TvShow[]>([]);
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [sort, setSort] = useState<string>(
    SORT_SHARED_OPTIONS.voteCount.valueDesc
  ); // Default sort

  const fetchDiscoverTvShows = async (
    pageNumber: number,
    sortOption: string
  ) => {
    try {
      if (pageNumber === 1) setIsRefreshing(true); // refresh by sort
      setLoading(true);

      const response = await fetch(
        `${BASE_URL}/discover/tv?sort_by=${sortOption}&page=${pageNumber}&language=es-ES`,
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
      setTvShows((prevTvShows) => {
        const tvShowIds = new Set(prevTvShows.map((tvShow) => tvShow.id));
        const newTvShows = data.results.filter(
          (tvShow: TvShow) => !tvShowIds.has(tvShow.id)
        );
        return pageNumber === 1 ? newTvShows : [...prevTvShows, ...newTvShows];
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
      setTvShows([]); // Clear the list.
      setPage(1); // Reset the page.
      fetchDiscoverTvShows(1, sort); // Call the API with the new sort criteria.
    }
  }, [sort]);

  useEffect(() => {
    if (page > 1) fetchDiscoverTvShows(page, sort); // Fetch more TV shows on page change
  }, [page]);

  return { tvShows, loading, error, hasMore, setPage, setSort, isRefreshing };
}
