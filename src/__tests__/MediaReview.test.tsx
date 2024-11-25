import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import MediaReview from "@/components/ui/review/MediaReview";
import { useMediaReviews } from "@/hooks/useMediaReviews";

vi.mock("@/hooks/useMediaReviews");

describe("MediaReview Component", () => {
  it("should display a loading message while data is being fetched", () => {
    // Mock for loading state
    (useMediaReviews as jest.Mock).mockReturnValue({
      mediaReviews: [],
      loading: true,
      error: null,
    });

    render(<MediaReview type="movie" id={123} />);

    const loadingMessage = screen.getByText("Cargando...");
    expect(loadingMessage).toBeInTheDocument();
  });

  it("should display an error message when there is an error", () => {
    // Mock for error state
    (useMediaReviews as jest.Mock).mockReturnValue({
      mediaReviews: [],
      loading: false,
      error: "Hubo un error al cargar las reseñas.",
    });

    render(<MediaReview type="movie" id={123} />);

    const errorMessage = screen.getByText(
      "Hubo un error al cargar las reseñas."
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it("should display a no data message when there are no reviews", () => {
    // Mock for no data state
    (useMediaReviews as jest.Mock).mockReturnValue({
      mediaReviews: [],
      loading: false,
      error: null,
    });

    render(<MediaReview type="movie" id={123} />);

    const noDataMessage = screen.getByText("No se encontraron reseñas.");
    expect(noDataMessage).toBeInTheDocument();
  });

  it("should render reviews when data is available", () => {
    // Mock for data state
    (useMediaReviews as jest.Mock).mockReturnValue({
      mediaReviews: [
        {
          id: 1,
          author: "John Doe",
          content: "This is a fantastic movie. Highly recommend watching it!",
          created_at: "2024-11-24T10:00:00Z",
          author_details: {
            rating: 8,
          },
        },
        {
          id: 2,
          author: "Jane Smith",
          content: "Not my favorite, but some parts were enjoyable.",
          created_at: "2024-11-23T12:00:00Z",
          author_details: {
            rating: null,
          },
        },
      ],
      loading: false,
      error: null,
    });

    render(<MediaReview type="movie" id={123} />);

    // USe a custom query to find the review content
    expect(
      screen.getByText(
        (content, element) =>
          element?.tagName.toLowerCase() === "p" &&
          content.includes("11/24/2024")
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        (content, element) =>
          element?.tagName.toLowerCase() === "p" &&
          content.includes("11/23/2024")
      )
    ).toBeInTheDocument();
  });
});
