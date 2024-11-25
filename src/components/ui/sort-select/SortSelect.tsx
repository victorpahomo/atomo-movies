import { SORT_OPTIONS } from "@/utils/constants";

import "./SortSelect.css";

interface SortSelectProps {
  onSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SortSelect({ onSortChange }: SortSelectProps) {
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
        defaultValue={SORT_OPTIONS.voteCount.valueDesc}
      >
        {Object.values(SORT_OPTIONS).map((option) => (
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
