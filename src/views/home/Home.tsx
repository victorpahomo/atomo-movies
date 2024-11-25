import PopularTvShows from "@/components/ui/popular-tv-shows/PopularTvShows";
import TrendingMovies from "@/components/ui/trending-movies/TrendingMovies";
import MarginLayout from "@/components/layouts/margin-layout/MarginLayout";
import MainLayout from "@/components/layouts/main-layout/MainLayout";
import MovieHero from "@/components/ui/movie-hero/MovieHero";

import "./Home.css";

export default function HomeView() {
  return (
    <MainLayout>
      <MovieHero />
      <MarginLayout>
        <p className="home__welcome">
          Bienvenido a{" "}
          <span className="home__welcome-title-span home__welcome-bold-span">
            Atomo Movies
          </span>
          , tu destino ideal para descubrir
          <span className="home__welcome-bold-span">
            {" "}
            calificaciones, reseñas y tráilers{" "}
          </span>
          de las mejores películas y series.
        </p>
        <TrendingMovies />
        <PopularTvShows />
      </MarginLayout>
    </MainLayout>
  );
}
