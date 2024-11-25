import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ExpandableContent from "../components/ui/expandable-content/ExpandableContent";

describe("ExpandableContent Component", () => {
  it("should render the truncated content if word count exceeds the limit", () => {
    const content =
      "This is a long text that contains more than thirty words to test the functionality of the ExpandableContent component.";
    render(<ExpandableContent content={content} wordLimit={10} />);

    const paragraph = screen.getByText(
      /This is a long text that contains more than.../
    );
    expect(paragraph).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /Ver más/ });
    expect(button).toBeInTheDocument();
  });

  it("should expand the content when 'Ver más' is clicked", () => {
    const content =
      "This is a long text that contains more than thirty words to test the functionality of the ExpandableContent component.";
    render(<ExpandableContent content={content} wordLimit={10} />);

    const button = screen.getByRole("button", { name: /Ver más/ });
    fireEvent.click(button);

    const expandedParagraph = screen.getByText(content);
    expect(expandedParagraph).toBeInTheDocument();

    const toggleButton = screen.getByRole("button", { name: /Ver menos/ });
    expect(toggleButton).toBeInTheDocument();
  });

  it("should collapse the content when 'Ver menos' is clicked", () => {
    const content =
      "This is a long text that contains more than thirty words to test the functionality of the ExpandableContent component.";
    render(<ExpandableContent content={content} wordLimit={10} />);

    const expandButton = screen.getByRole("button", { name: /Ver más/ });
    fireEvent.click(expandButton); // Expand content

    const collapseButton = screen.getByRole("button", { name: /Ver menos/ });
    fireEvent.click(collapseButton); // Collapse content

    const collapsedParagraph = screen.getByText(
      /This is a long text that contains more than.../
    );
    expect(collapsedParagraph).toBeInTheDocument();
  });

  it("should render the full content if the word count does not exceed the limit", () => {
    const content = "This is a short text.";
    render(<ExpandableContent content={content} wordLimit={10} />);

    const paragraph = screen.getByText(content);
    expect(paragraph).toBeInTheDocument();

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
