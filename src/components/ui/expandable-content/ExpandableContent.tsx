import { useState } from "react";

import "./ExpandableContent.css";

type ExpandableContentProps = {
  content?: string | null;
  wordLimit?: number;
};

export default function ExpandableContent({
  content,
  wordLimit = 30,
}: ExpandableContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = content?.split(" ");

  if (!content) {
    return null;
  }

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <p>
        {isExpanded
          ? content
          : `${words?.slice(0, wordLimit).join(" ")}${
              (words?.length ?? 0) > wordLimit ? "..." : ""
            }`}
      </p>
      {words && words.length > wordLimit && (
        <button className="expandable__toggle-button" onClick={handleToggle}>
          {isExpanded ? "Ver menos" : "Ver más"}
        </button>
      )}
    </div>
  );
}
