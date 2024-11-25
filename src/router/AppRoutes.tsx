import { BrowserRouter, Route, Routes } from "react-router";

import {
  MovieDetailView,
  HomeView,
  MoviesView,
  NotFoundView,
  TvShowsView,
  TvShowDetailView,
} from "@/views";

// App use react-router to handle routing in the application
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="movies" element={<MoviesView />} />
        <Route path="movie/:movieId" element={<MovieDetailView />} />
        <Route path="tv-shows" element={<TvShowsView />} />
        <Route path="tv-show/:tvShowId" element={<TvShowDetailView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}
