import { useNavigate } from "react-router";

import { generateImgPath } from "@/utils/generateImgPath";
import StarSvg from "@/assets/svg-components/StarSvg";
import { POSTER_SIZES } from "@/utils/constants";
import { TvShow } from "@/types/tvShow.types";

import "./CardGlobal.css";

interface CardProps {
  tvShow: TvShow;
}

export default function TvShowCard({ tvShow }: CardProps) {
  let navigate = useNavigate();

  const posterUrl = generateImgPath({
    path: tvShow?.poster_path,
    size: POSTER_SIZES.w342,
  });

  const handleDetailClick = () => {
    navigate(`/tv-show/${tvShow?.id}`);
  };

  return (
    <div className="card" onClick={handleDetailClick}>
      <img src={posterUrl} alt={tvShow?.name} />
      <div className="card-content">
        <h2 className="card-content__title">{tvShow?.name}</h2>
        <div className="card-content__description">
          <div className="card-content__description--vote">
            <StarSvg />
            <p className="card-content__description--vote-average">
              {tvShow?.vote_average.toFixed(1)}
            </p>
          </div>
          <p className="card-content__description--view-detail">Ver detalle</p>
        </div>
      </div>
    </div>
  );
}
