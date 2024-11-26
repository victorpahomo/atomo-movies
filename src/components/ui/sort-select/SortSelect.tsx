import { SORT_MOVIES_OPTIONS, SORT_TV_SHOWS_OPTIONS } from "@/utils/constants";

import "./SortSelect.css";

interface SortSelectProps {
  onSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  type: "movies" | "tvShows";
}

export default function SortSelect({ onSortChange, type }: SortSelectProps) {
  return (
    <div className="sort-select-container">
      <label htmlFor="sort-select" className="sort-label">
        Ordenar:{" "}
      </label>
      <select
        data-testid="sort-select"
        className="sort-select"
        id="sort-select"
        onChange={onSortChange}
        defaultValue={
          type === "movies"
            ? SORT_MOVIES_OPTIONS.voteCount.valueDesc
            : SORT_TV_SHOWS_OPTIONS.voteCount.valueDesc
        }
      >
        {Object.values(
          type === "movies" ? SORT_MOVIES_OPTIONS : SORT_TV_SHOWS_OPTIONS
        ).map((option) => (
          <optgroup
            key={option.labelAsc}
            label={option.labelAsc.split(" ")[0]}
            className="sort-select-list"
          >
            <option value={option.valueAsc}>{option.labelAsc}</option>
            <option value={option.valueDesc}>{option.labelDesc}</option>
          </optgroup>
        ))}
      </select>
    </div>
  );
}
