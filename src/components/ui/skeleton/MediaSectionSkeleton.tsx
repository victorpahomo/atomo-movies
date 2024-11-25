import "./MediaSectionSkeleton.css";

export default function MediaSectionSkeleton() {
  return (
    <section className="movie-hero skeleton">
      <div className="movie-hero__background skeleton-background"></div>
      <div className="movie-hero__content">
        <div className="skeleton-subtitle"></div>
        <div className="skeleton-release-date"></div>
        <div className="skeleton-overview"></div>
        <div className="skeleton-actions">
          <div className="skeleton-button"></div>
          <div className="skeleton-button"></div>
        </div>
      </div>
    </section>
  );
}
