import axios from "axios";

const url = "https://rickandmortyapi.com/api/location";

export const getAllLocations = async () => {
  const response = await axios.get(url);
  return response.data.results;
};
