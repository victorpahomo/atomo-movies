import { useEffect, useState } from "react";
import { MediaVideos } from "@/types/mediaVideos.types";
import { BASE_URL, API_TOKEN } from "@/utils/constants";

const VALID_TYPES = ["tv", "movie"] as const;
type MediaType = (typeof VALID_TYPES)[number];

const ERROR_MESSAGES = {
  invalidType: "Invalid type. Use 'tv' or 'movie'.",
  invalidId: "Invalid id or type.",
  fetchError: "Failed to fetch media videos.",
};

export function useMediaVideos(type: MediaType, id: number) {
  const [mediaVideos, setMediaVideos] = useState<MediaVideos[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id || !type || !VALID_TYPES.includes(type)) {
      setError(ERROR_MESSAGES.invalidType);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const fetchMediaVideos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/${type}/${id}/videos?language=es-ES`,
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
        setMediaVideos(data.results || []);
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

    fetchMediaVideos();

    // Cleanup to abort fetch if the component unmounts
    return () => controller.abort();
  }, [type, id]);

  return { mediaVideos, loading, error };
}
