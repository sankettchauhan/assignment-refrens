import axios from "axios";

const GET_API_URL = "https://rickandmortyapi.com/api";

// character numbers are taken as comma separated integers in a string - "1,2,3"
// returns a promise
export const getCharacters = (characterNumbers) =>
  axios.get(`${GET_API_URL}/character/${characterNumbers}`);

// get all episodes ato avoid repeated api calls for same episode details

// returns responses from 3 promises to get all episodes
// why 3 promises ? because the API split response of all episodes in 3 pages
export const getAllEpisodes = () =>
  Promise.all([
    axios.get(`${GET_API_URL}/episode`),
    axios.get(`${GET_API_URL}/episode/?page=2`),
    axios.get(`${GET_API_URL}/episode/?page=3`),
  ]);
