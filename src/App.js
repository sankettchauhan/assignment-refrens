import { useEffect, useState } from "react";
import { getAllEpisodes, getCharacters } from "./axios";
import Card from "./Card";
import Hero from "./Hero";
import Loading from "./Loading";
import { getEpisodesNames, getCharacterEpisodes } from "./util";

function App() {
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState([]);

  console.log("characters: ", characters);
  console.log("episodes: ", episodes);

  async function loadCharacters() {
    setLoading(true);
    try {
      const charactersResponse = await getCharacters(
        // array of 10 items which is mapped over to get next 10 characters based on the current character array
        [...Array(10).keys()].map((x) => x + characters.length + 1).join(",")
      );
      setCharacters((characters) => characters.concat(charactersResponse.data));
    } catch (error) {
      console.clear();
      console.log("An error occured while getting characters.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function loadEpisodes() {
    try {
      const allEpisodesResponse = await getAllEpisodes();
      const episodesResponse = getEpisodesNames(allEpisodesResponse);
      setEpisodes(episodesResponse);
    } catch (error) {
      console.clear();
      console.log("An error occured while getting episodes.");
      console.log(error);
    }
  }

  useEffect(() => {
    loadCharacters();
    loadEpisodes();
  }, []);

  characters.length === 0 && <Loading />;

  return (
    <div className="App bg-black/90 text-white">
      <Hero />
      <div className="grid grid-cols-2 gap-x-8 gap-y-16 px-40 py-10">
        {characters?.map((c, i) => {
          const characterEpisodes = getCharacterEpisodes(c, episodes);
          return <Card key={i} character={c} episodes={characterEpisodes} />;
        })}
      </div>
      {loading ? (
        <Loading />
      ) : (
        <button onClick={loadCharacters}>load more</button>
      )}
    </div>
  );
}

export default App;
