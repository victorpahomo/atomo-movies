export interface TvShow {
  adult?: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  genres?: Genre[];
  origin_country: string[];
  number_of_seasons?: number;
  tagline?: string;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: Date;
  name: string;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}
