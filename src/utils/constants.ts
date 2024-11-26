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

const SORT_SHARED_OPTIONS = {
  popularity: {
    valueAsc: "popularity.asc",
    valueDesc: "popularity.desc",
    labelAsc: "Popularidad ↑",
    labelDesc: "Popularidad ↓",
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

const SORT_MOVIES_OPTIONS = {
  ...SORT_SHARED_OPTIONS,
  title: {
    valueAsc: "title.asc",
    valueDesc: "title.desc",
    labelAsc: "Título ↑",
    labelDesc: "Título ↓",
  },
  releaseDate: {
    valueAsc: "primary_release_date.asc",
    valueDesc: "primary_release_date.desc",
    labelAsc: "Fecha de lanzamiento ↑",
    labelDesc: "Fecha de lanzamiento ↓",
  },
};

const SORT_TV_SHOWS_OPTIONS = {
  ...SORT_SHARED_OPTIONS,
  name: {
    valueAsc: "name.asc",
    valueDesc: "name.desc",
    labelAsc: "Nombre ↑",
    labelDesc: "Nombre ↓",
  },
  firstAirDate: {
    valueAsc: "first_air_date.asc",
    valueDesc: "first_air_date.desc",
    labelAsc: "Fecha de estreno ↑",
    labelDesc: "Fecha de estreno ↓",
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
  SORT_SHARED_OPTIONS,
  SORT_MOVIES_OPTIONS,
  SORT_TV_SHOWS_OPTIONS,
};
