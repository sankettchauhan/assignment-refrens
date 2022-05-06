import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("test hero component", () => {
  it("checks for heading 'rick and morty'", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: "rick and morty" })
    ).toBeInTheDocument();
  });
});
