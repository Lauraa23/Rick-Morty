import axios from "axios";

const url = "https://rickandmortyapi.com/api/episode";

export const getAllEpisodes = async () => {
  const response = await axios.get(url);
  return response.data.results;
};
