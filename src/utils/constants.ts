const BACKDROP_SIZES = {
  w300: "w300",
  w780: "w780",
  w1280: "w1280",
  original: "original",
};

const POSTER_SIZES = {
  w92: "w92",
  w154: "w154",
  w185: "w185",
  w342: "w342",
  w500: "w500",
  w780: "w780",
  original: "original",
};

const PROFILE_SIZES = {
  w45: "w45",
  w185: "w185",
  h632: "h632",
  original: "original",
};

const SORT_OPTIONS = {
  title: {
    valueAsc: "original_title.asc",
    valueDesc: "original_title.desc",
    labelAsc: "Título ↑",
    labelDesc: "Título ↓",
  },
  popularity: {
    valueAsc: "popularity.asc",
    valueDesc: "popularity.desc",
    labelAsc: "Popularidad ↑",
    labelDesc: "Popularidad ↓",
  },
  releaseDate: {
    valueAsc: "primary_release_date.asc",
    valueDesc: "primary_release_date.desc",
    labelAsc: "Fecha de lanzamiento ↑",
    labelDesc: "Fecha de lanzamiento ↓",
  },
  vote: {
    valueAsc: "vote_average.asc",
    valueDesc: "vote_average.desc",
    labelAsc: "Calificación ↑",
    labelDesc: "Calificación ↓",
  },
  voteCount: {
    valueAsc: "vote_count.asc",
    valueDesc: "vote_count.desc",
    labelAsc: "Cantidad de votos ↑",
    labelDesc: "Cantidad de votos ↓",
  },
};

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

export {
  BACKDROP_SIZES,
  POSTER_SIZES,
  BASE_URL,
  API_TOKEN,
  IMAGE_URL,
  PROFILE_SIZES,
  SORT_OPTIONS,
};
