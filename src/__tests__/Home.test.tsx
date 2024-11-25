import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeView from "@/views/home/Home";

vi.mock("@/components/ui/popular-tv-shows/PopularTvShows", () => ({
  default: () => <div data-testid="popular-tv-shows">PopularTvShows Mock</div>,
}));
vi.mock("@/components/ui/trending-movies/TrendingMovies", () => ({
  default: () => <div data-testid="trending-movies">TrendingMovies Mock</div>,
}));
vi.mock("@/components/layouts/margin-layout/MarginLayout", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="margin-layout">{children}</div>
  ),
}));
vi.mock("@/components/layouts/main-layout/MainLayout", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="main-layout">{children}</div>
  ),
}));
vi.mock("@/components/ui/movie-hero/MovieHero", () => ({
  default: () => <div data-testid="movie-hero">MovieHero Mock</div>,
}));

describe("HomeView", () => {
  it("renders the HomeView component correctly", () => {
    render(<HomeView />);

    // Verify that the main layout is rendered
    expect(screen.getByTestId("main-layout")).toBeInTheDocument();

    // Verify that the margin layout is rendered
    expect(screen.getByTestId("margin-layout")).toBeInTheDocument();

    // Verify that the welcome text is rendered
    const welcomeText = screen.getByText(/bienvenido a/i);
    expect(welcomeText).toBeInTheDocument();

    // Verify that the movie hero, trending movies, and popular tv shows are rendered
    expect(screen.getByTestId("movie-hero")).toBeInTheDocument();
    expect(screen.getByTestId("trending-movies")).toBeInTheDocument();
    expect(screen.getByTestId("popular-tv-shows")).toBeInTheDocument();
  });
});
