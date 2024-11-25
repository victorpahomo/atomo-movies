import { useState, useEffect, useRef } from "react";

import SearchCards from "@/components/ui/search-cards/SearchCards";
import SearchButton from "@/components/ui/button/SearchButton";
import SearchSvg from "@/assets/svg-components/SearchSvg";
import CloseSvg from "@/assets/svg-components/CloseSvg";
import { useMultiSearch } from "@/hooks/useMultiSearch";

import "./SearchModal.css";

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const { multiSearchItems, loading, error } = useMultiSearch(query);
  const inputRef = useRef<HTMLInputElement>(null);
  const filteredItems =
    multiSearchItems?.filter(
      (item) => item.media_type === "movie" || item.media_type === "tv"
    ) || [];

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains("search-modal__overlay")) {
      closeModal();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = e?.target?.value?.trim().toLowerCase();
    setQuery(trimmedValue);
  };

  useEffect(() => {
    if (isOpen) {
      inputRef?.current?.focus();
      window.addEventListener("keydown", handleKeyDown);
      document.body.classList.add("no-scroll");
    } else {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("no-scroll");
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <>
      <SearchButton onClick={openModal} />

      {isOpen && (
        <div className="search-modal__overlay" onClick={handleOverlayClick}>
          <div className="search-modal__content">
            <div className="search-modal__content-input-container">
              <SearchSvg />
              <input
                ref={inputRef}
                className="search-modal__content-input"
                type="text"
                placeholder="Buscar películas o series..."
                onChange={handleOnChange}
              />
              <CloseSvg onClick={closeModal} />
            </div>

            {/* Display search results */}
            {error && <p>Error: {error}</p>}
            {loading ? (
              <p>Cargando...</p>
            ) : filteredItems?.length > 0 ? (
              <SearchCards items={filteredItems} closeModal={closeModal} />
            ) : (
              query && <p>No se encontraron resultados.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
