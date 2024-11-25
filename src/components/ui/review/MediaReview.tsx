import ExpandableContent from "@/components/ui/expandable-content/ExpandableContent";
import { useMediaReviews } from "@/hooks/useMediaReviews";

import "./MediaReview.css";
import MarginLayout from "@/components/layouts/margin-layout/MarginLayout";

const VALID_TYPES = ["tv", "movie"] as const;
type MediaType = (typeof VALID_TYPES)[number];

type MediaReviewProps = {
  type: MediaType;
  id: number;
};

const WORD_LIMIT = 30;

export default function MediaReview({ type, id }: MediaReviewProps) {
  const { mediaReviews, loading, error } = useMediaReviews(type, id);

  if (error) {
    return (
      <div className="review__error-message">
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="review__loading-message">
        <p>Cargando...</p>
      </div>
    );
  }

  if (!mediaReviews.length) {
    return (
      <div className="review__no-data-message">
        <p>No se encontraron reseñas.</p>
      </div>
    );
  }

  return (
    <MarginLayout>
      <div className="review-container">
        <h2 className="review__title">Reseñas</h2>
        <div className="reviews">
          {mediaReviews.map((review) => (
            <div key={review?.id} className="review">
              <div className="review__info">
                {review?.author_details?.rating && (
                  <span className="rating-badge">
                    {review?.author_details?.rating} / 10
                  </span>
                )}
                <p>{new Date(review?.created_at).toLocaleDateString()}</p>
              </div>
              <h3>{review?.author}</h3>
              <ExpandableContent
                content={review?.content}
                wordLimit={WORD_LIMIT}
              />
            </div>
          ))}
        </div>
      </div>
    </MarginLayout>
  );
}
