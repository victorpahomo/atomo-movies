import { useEffect, useState } from "react";

import { BASE_URL, API_TOKEN } from "@/utils/constants";
import { TvShow } from "@/types/tvShow.types";

export function useTvShowDetail(tvId: number) {
  const [tvShowDetail, setTvShowDetail] = useState<TvShow | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMovieDetail() {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/tv/${tvId}?language=es-ES`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setTvShowDetail(data || null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetail();
  }, [tvId]);

  return { tvShowDetail, loading, error };
}
