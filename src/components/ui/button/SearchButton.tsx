import SearchSvg from "@/assets/svg-components/SearchSvg";

import "./SearchButton.css";

export default function SearchButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="search-button" onClick={onClick}>
      <SearchSvg />
      <span className="search-button__text">Buscar películas o series</span>
    </button>
  );
}
