import { useNavigate } from "react-router";

import { generateImgPath } from "@/utils/generateImgPath";
import StarSvg from "@/assets/svg-components/StarSvg";
import { POSTER_SIZES } from "@/utils/constants";
import { Movie } from "@/types/movie.types";

import "./CardGlobal.css";

interface CardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: CardProps) {
  let navigate = useNavigate();

  const posterUrl = generateImgPath({
    path: movie.poster_path,
    size: POSTER_SIZES.w342,
  });

  const handleDetailClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="card" onClick={handleDetailClick}>
      <img src={posterUrl} alt={movie.title} />
      <div className="card-content">
        <h2 className="card-content__title">{movie.title}</h2>
        <div className="card-content__description">
          <div className="card-content__description--vote">
            <StarSvg />
            <p className="card-content__description--vote-average">
              {movie?.vote_average.toFixed(1)}
            </p>
          </div>
          <p className="card-content__description--view-detail">Ver detalle</p>
        </div>
      </div>
    </div>
  );
}
