import { useEffect, useState } from "react";

import { BASE_URL, API_TOKEN } from "@/utils/constants";
import { TrendingMovie } from "@/types/trendingMovie.types";

export function useTrendingMovies() {
  const [trendingMovies, setTrendingMovies] = useState<TrendingMovie[] | null>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/trending/movie/week?language=es-ES`,
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
        setTrendingMovies(data.results || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    }

    fetchTrendingMovies();
  }, []);

  return { trendingMovies, loading, error };
}
