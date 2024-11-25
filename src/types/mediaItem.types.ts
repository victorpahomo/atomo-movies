export interface MediaItem {
  backdrop_path: string;
  id: number;
  title?: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date?: Date;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: Date;
  origin_country?: string[];
}

export enum MediaType {
  Movie = "movie",
  Tv = "tv",
}
