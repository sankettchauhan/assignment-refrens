import axios from "axios";

const GET_API_URL = "https://rickandmortyapi.com/api";

// character numbers are taken as comma separated integers in a string - "1,2,3"
// returns a promise
const getCharacters = (characterNumbers) =>
  axios.get(`${GET_API_URL}/characters/${characterNumbers}`);
