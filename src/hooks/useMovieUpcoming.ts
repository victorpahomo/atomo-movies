import { useEffect, useState } from "react";

import { BASE_URL, API_TOKEN } from "@/utils/constants";
import { Movie } from "@/types/movie.types";

const ERROR_MESSAGES = {
  fetchError: "Failed to fetch movies upcoming",
};

export function useMovieUpcoming() {
  const [moviesUpcoming, setMoviesUpcoming] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchMoviesUpcoming = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/movie/upcoming?language=es-ES&region=ES`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_TOKEN}`,
            },
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(response.statusText || ERROR_MESSAGES.fetchError);
        }

        const data = await response.json();
        setMoviesUpcoming(data.results);
        setError(null);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(
            err instanceof Error ? err.message : ERROR_MESSAGES.fetchError
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesUpcoming();

    // Cleanup to abort fetch if the component unmounts
    return () => controller.abort();
  }, []);

  return { moviesUpcoming, loading, error };
}
