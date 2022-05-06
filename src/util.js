// takes the response of episodes promise and returns an object with key as id and name of episode as value.
export const getEpisodesNames = (allEpisodesResponse) => {
  const episodes = {};
  allEpisodesResponse.map((page) =>
    page.data.results.forEach(
      (episode) => (episodes[episode.id] = episode.name)
    )
  );
  return episodes;
};

export const getCharacterEpisodes = (character, episodes) => {
  // [{ "episode number": "episode name" }]
  //   for example { "1": "Pilot" }
  const characterEpisodes = [];
  character.episode.forEach((ep) => {
    const episodeNumber = parseInt(ep.split("/")[5]);
    const episodeName = episodes[episodeNumber];
    characterEpisodes.push({ episodeNumber, episodeName });
  });
  return characterEpisodes;
};
