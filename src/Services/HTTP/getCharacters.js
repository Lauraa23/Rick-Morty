import axios from "axios";

const url = "https://rickandmortyapi.com/api/character";

export const getAllCharacters = async () => {
  const response = await axios.get(url);
  return response.data.results;
};
