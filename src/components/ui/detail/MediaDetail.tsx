import { useMediaVideos } from "@/hooks/useMediaVideos";
import StarSvg from "@/assets/svg-components/StarSvg";
import VideoModal from "../video-modal/VideoModal";

import "./MediaDetail.css";

const VALID_TYPES = ["tv", "movie"] as const;
type MediaType = (typeof VALID_TYPES)[number];

interface MediaDetailProps {
  id: number;
  type: MediaType;
  title: string | undefined;
  backdropPath: string | undefined;
  posterPath: string | undefined;
  releaseDate?: string | Date;
  seasons?: number | undefined;
  genres: string[] | undefined;
  runtime?: number | undefined;
  originalTitle: string | undefined;
  voteAverage: number | undefined;
  voteCount: number | undefined;
  tagline?: string | undefined;
  overview: string | undefined;
}

const MediaDetail: React.FC<MediaDetailProps> = ({
  id,
  type,
  title,
  backdropPath,
  posterPath,
  releaseDate,
  seasons,
  genres,
  runtime,
  originalTitle,
  voteAverage,
  voteCount,
  tagline,
  overview,
}) => {
  const { mediaVideos, loading, error } = useMediaVideos("movie", id);

  return (
    <div className="media-detail">
      <div className="media-detail__background">
        <img
          src={backdropPath}
          alt={title}
          className="media-detail__background-image"
        />
        <div className="media-detail__overlay" />
      </div>

      <div className="media-detail__content">
        <img
          src={posterPath}
          alt={title}
          className="media-detail__content-image"
        />
        <div className="media-detail__info">
          <p className="media-detail__type">
            {type === "tv" ? "Serie" : "Película"}
          </p>
          <div className="media-detail__header">
            <h2 className="media-detail__title">{title}</h2>
            {releaseDate && (
              <p className="media-detail__release-date">
                (
                {releaseDate
                  ? new Date(releaseDate).getFullYear()
                  : "Fecha no disponible"}
                )
              </p>
            )}
          </div>

          <p className="media-detail__metadata">
            {genres?.join(", ") || "Géneros no disponibles"}{" "}
            {runtime ? `• ${runtime} min` : ""}
            {seasons ? ` • ${seasons} temporadas` : ""}
          </p>

          <p className="media-detail__original-title">
            Nombre original: {originalTitle || "Nombre no disponible"}
          </p>
          <div className="media-detail__vote">
            <StarSvg size={30} />
            <p className="media-detail__vote-average">
              {voteAverage?.toFixed(1).toLocaleString()}
            </p>
            <p className="media-detail__vote-count">
              | {voteCount?.toLocaleString()} votos
            </p>
          </div>

          <div className="media-detail__actions">
            <VideoModal
              mediaVideos={mediaVideos}
              loading={loading}
              error={error}
            />
          </div>

          {tagline && <p className="media-detail__tagline">{tagline}</p>}

          <div className="media-detail__summary">
            <h3 className="media-detail__summary-title">Sinopsis</h3>
            <p className="media-detail__description">
              {overview || "Lo sentimos, no hay descripción disponible."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaDetail;
