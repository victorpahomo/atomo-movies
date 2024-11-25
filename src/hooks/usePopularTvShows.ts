import { useEffect, useState } from "react";

import { PopularTvShows } from "@/types/popularTvShow.types";
import { BASE_URL, API_TOKEN } from "@/utils/constants";

export function usePopularTvShows() {
  const [popularTvShows, setPopularTvShows] = useState<PopularTvShows[] | null>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPopularTvShows() {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/trending/tv/day?language=es-ES`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        );

        if (!response?.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setPopularTvShows(data.results || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    }

    fetchPopularTvShows();
  }, []);

  return { popularTvShows, loading, error };
}
