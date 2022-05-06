import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("test card component", () => {
  function renderCard() {
    render(
      <Card
        character={{
          episode: [
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
          ],
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
          location: { name: "Testicle Monster Dimension" },
          name: "Abradolf Lincler",
          origin: { name: "Earth (Replacement Dimension)" },
          species: "Human",
          status: "unknown",
          type: "Genetic experiment",
        }}
        episodes={[{ episodeNumber: 1, episodeName: "test" }]}
      />
    );
  }
  it("renders name of the character", () => {
    renderCard();
    screen.getByRole("heading", { name: "Abradolf Lincler" });
  });
  it("renders image of the character", () => {
    renderCard();
    screen.getByRole("img", { name: "Abradolf Lincler" });
  });
  it("renders gender and status of the character", () => {
    renderCard();
    screen.getByRole("heading", { name: "Male unknown" });
  });
  it("renders current location of the character", () => {
    renderCard();
    screen.getByRole("heading", {
      name: "Current location: Testicle Monster Dimension",
    });
  });
  it("renders origin of the character", () => {
    renderCard();
    screen.getByRole("heading", {
      name: "Origin: Earth (Replacement Dimension)",
    });
  });
  it("renders species of the character", () => {
    renderCard();
    screen.getByRole("heading", {
      name: "Species: Human",
    });
  });
  it("renders type of the character", () => {
    renderCard();
    screen.getByRole("heading", {
      name: "Type: Genetic experiment",
    });
  });
  it("renders button to show episode", () => {
    renderCard();
    screen.getByRole("button", {
      name: "Show episodes Abradolf Lincler featured in!",
    });
  });
});
