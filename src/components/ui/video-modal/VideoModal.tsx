import { useState, useEffect } from "react";

import PlayButton from "@/components/ui/button/PlayButton";
import { MediaVideos } from "@/types/mediaVideos.types";

import "./VideoModal.css";
import CloseSvg from "@/assets/svg-components/CloseSvg";

interface VideoModalProps {
  mediaVideos: MediaVideos[];
  loading?: boolean;
  error?: any;
}
// Add custom type definition for lite-youtube
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lite-youtube": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { videoid: string; params?: string; videotitle?: string };
    }
  }
}

export default function VideoModal({
  mediaVideos,
  loading,
  error,
}: VideoModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<MediaVideos>();

  useEffect(() => {
    const selectedVideo = mediaVideos?.find(
      (video) =>
        video?.key &&
        video?.site === "YouTube" &&
        (video?.type === "Trailer" || video?.type)
    );
    setSelectedVideo(selectedVideo);
  }, [mediaVideos]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains("video-modal__overlay")) {
      closeModal();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.classList.add("no-scroll");
    } else {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("no-scroll");
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  if (error) {
    return null;
  }

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!mediaVideos.length) {
    return null;
  }

  return (
    <div>
      <PlayButton onPlayTrailer={openModal} />

      {isOpen && (
        <div className="video-modal__overlay" onClick={handleOverlayClick}>
          <div className="video-modal__content">
            <div className="video-modal__content-header">
              <h3>{selectedVideo?.name || "Reproducir video"}</h3>
              <CloseSvg onClick={closeModal} />
            </div>
            <div className="video-modal__content-video">
              <lite-youtube
                videoid={selectedVideo?.key || ""}
                videotitle={selectedVideo?.name || ""}
                params="controls=1"
              ></lite-youtube>
            </div>
            <p className="video-modal__content-disclaimer">
              Ver en pantalla completa para mejor experiencia.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
