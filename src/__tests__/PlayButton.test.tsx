import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import PlayButton from "@/components/ui/button/PlayButton";

describe("PlayButton", () => {
  it("renders the button with correct text", () => {
    render(<PlayButton onPlayTrailer={() => {}} />);
    const button = screen.getByRole("button", { name: /ver trailer/i });
    expect(button).toBeInTheDocument();
  });

  it("calls the onPlayTrailer callback when clicked", async () => {
    const onPlayTrailerMock = vi.fn();
    render(<PlayButton onPlayTrailer={onPlayTrailerMock} />);

    const button = screen.getByRole("button", { name: /ver trailer/i });
    await userEvent.click(button);

    expect(onPlayTrailerMock).toHaveBeenCalledTimes(1);
  });

  it("renders the SVG icon", () => {
    render(<PlayButton onPlayTrailer={() => {}} />);
    const svgIcon = screen.getByRole("img", { name: /play icon/i });
    expect(svgIcon).toBeInTheDocument();
  });
});
