import axios from "axios";

export const GetBeers = () => {
  let url = `https://api.punkapi.com/v2/beers`;

  return axios.get(url).then((response) => response.data);
};
