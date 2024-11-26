import { useNavigate } from "react-router";

import { generateImgPath } from "@/utils/generateImgPath";
import { MediaItem } from "@/types/mediaItem.types";
import { POSTER_SIZES } from "@/utils/constants";

import "./SearchCards.css";
import StarSvg from "@/assets/svg-components/StarSvg";

interface SearchCardsProps {
  items: MediaItem[];
  closeModal: () => void;
}

export default function SearchCards({ items, closeModal }: SearchCardsProps) {
  const navigate = useNavigate();

  const handleDetailClick = (itemType: "movie" | "tv", itemId: number) => {
    if (!itemId || !itemType) return;

    if (itemType === "movie") {
      navigate(`/movie/${itemId}`);
    } else {
      navigate(`/tv-show/${itemId}`);
    }
    closeModal();
  };

  return (
    <div className="search-cards custom-scrollbar">
      {items?.map((item) => (
        <div
          key={item.id}
          className="search-cards__card"
          onClick={() => handleDetailClick(item.media_type, item.id)}
        >
          <img
            className="search-cards__card-img"
            src={generateImgPath({
              path: item.poster_path,
              size: POSTER_SIZES.w185,
            })}
            alt={item.title || item.name}
          />
          <div className="search-cards__card-info">
            <h3 className="search-cards__card-title">
              {item.title || item.name}
            </h3>

            <div className="search-cards__card-vote-container">
              <StarSvg size={19} />
              <p className="search-cards__card-vote">
                {item?.vote_average?.toFixed(1)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
