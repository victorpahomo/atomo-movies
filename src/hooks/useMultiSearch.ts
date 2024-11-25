import { useEffect, useState } from "react";

import { BASE_URL, API_TOKEN } from "@/utils/constants";
import { MediaItem } from "@/types/mediaItem.types";

export function useMultiSearch(query: string) {
  const [multiSearchItems, setMultiSearchItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) {
      setMultiSearchItems([]);
      setLoading(false);
      setError(null);
      return;
    }
    async function fetchMovieDetail() {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/search/multi?query=${query}`,
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
        setMultiSearchItems(data?.results || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetail();
  }, [query]);

  return { multiSearchItems, loading, error };
}
