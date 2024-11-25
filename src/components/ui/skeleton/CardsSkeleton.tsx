import "./CardsSkeleton.css";

function CardSkeleton() {
  return (
    <div className="skeleton-card-container">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-details">
          <div className="skeleton-detail"></div>
          <div className="skeleton-detail"></div>
        </div>
      </div>
    </div>
  );
}

export default function CardsSkeleton() {
  return (
    <div className="cards-skeleton" data-testid="cards-skeleton">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
