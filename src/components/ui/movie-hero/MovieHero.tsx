import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import ExpandableContent from "@/components/ui/expandable-content/ExpandableContent";
import MediaSectionSkeleton from "@/components/ui/skeleton/MediaSectionSkeleton";
import MarginLayout from "@/components/layouts/margin-layout/MarginLayout";
import ViewDetailButton from "@/components/ui/button/ViewDetailButton";
import { useMovieUpcoming } from "@/hooks/useMovieUpcoming";
import { generateImgPath } from "@/utils/generateImgPath";
import { useMediaVideos } from "@/hooks/useMediaVideos";
import { BACKDROP_SIZES } from "@/utils/constants";
import { Movie } from "@/types/movie.types";

import "./MovieHero.css";
import VideoModal from "../video-modal/VideoModal";

export default function MovieHero() {
  const { moviesUpcoming, loading, error } = useMovieUpcoming();
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Select a random movie from the upcoming movies
    // there must be at least one movie and it must have a backdrop image
    if (moviesUpcoming?.length > 0) {
      let selectedMovie =
        moviesUpcoming[Math.floor(Math.random() * moviesUpcoming.length)];
      if (!selectedMovie.backdrop_path) {
        selectedMovie =
          moviesUpcoming.find((movie) => movie.backdrop_path) || selectedMovie;
      }
      setRandomMovie(selectedMovie);
    }
  }, [moviesUpcoming]);

  const backdropPath = randomMovie
    ? generateImgPath({
        path: randomMovie.backdrop_path || "",
        size: BACKDROP_SIZES.w1280,
      })
    : "";

  const {
    mediaVideos,
    loading: loadingMediaVideo,
    error: errorMediaVideo,
  } = useMediaVideos("movie", randomMovie?.id || 0);

  const handleDetailClick = (movieId: number | undefined) => {
    if (!movieId) {
      navigate("/not-found");
    } else {
      navigate(`/movie/${movieId}`);
    }
  };

  if (loading || !randomMovie) {
    return <MediaSectionSkeleton />;
  }

  if (error) {
    return (
      <MarginLayout>
        <p>Hubo un error al cargar las películas</p>
      </MarginLayout>
    );
  }

  return (
    <section className="movie-hero">
      <div className="movie-hero__background">
        <img src={backdropPath} alt="Movie poster" />
      </div>
      <div className="movie-hero__content">
        <h1 className="movie-hero__title">{randomMovie.title}</h1>
        <h2 className="movie-hero__subtitle">Próximamente en cartelera</h2>
        <p className="movie-hero__release-date">
          {new Date(randomMovie.release_date).toLocaleDateString()}
        </p>
        <ExpandableContent content={randomMovie.overview} />
        <div className="movie-hero__actions">
          <VideoModal
            mediaVideos={mediaVideos}
            loading={loadingMediaVideo}
            error={errorMediaVideo}
          />
          <ViewDetailButton
            onViewDetail={() => handleDetailClick(randomMovie.id)}
          />
        </div>
      </div>
      <div className="movie-hero__overlay"></div>
    </section>
  );
}
