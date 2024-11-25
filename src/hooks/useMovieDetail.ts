import { useEffect, useState } from "react";

import { BASE_URL, API_TOKEN } from "@/utils/constants";
import { MovieDetail } from "@/types/movieDetail.types";

export function useMovieDetail(movieId: number) {
  const [movieDetail, setMovieDetail] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMovieDetail() {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/movie/${movieId}?language=es-ES`,
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
        setMovieDetail(data || null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetail();
  }, [movieId]);

  return { movieDetail, loading, error };
}
