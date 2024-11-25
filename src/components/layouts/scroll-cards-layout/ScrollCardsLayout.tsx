import { useRef } from "react";

import "./ScrollCardsLayout.css";

interface ScrollLayoutProps {
  items: React.ReactNode[];
  scrollDistance?: number;
  title?: string;
  className?: string;
}

const SCROLL_DISTANCE = 200;

export default function ScrollCardsLayout({
  items,
  title,
  className,
}: ScrollLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: SCROLL_DISTANCE,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -SCROLL_DISTANCE,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`scroll-layout ${className || ""}`}>
      {title && <h2 className="scroll-layout__title">{title}</h2>}

      <button
        className="scroll-layout__button scroll-layout__button--prev"
        onClick={scrollPrev}
      >
        &lt;
      </button>

      <div
        className="scroll-layout__container custom-scrollbar"
        ref={containerRef}
      >
        {items.map((item, index) => (
          <div key={index} className="scroll-layout__item">
            {item}
          </div>
        ))}
      </div>

      <button
        className="scroll-layout__button scroll-layout__button--next"
        onClick={scrollNext}
      >
        &gt;
      </button>
    </div>
  );
}
