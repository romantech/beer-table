import axios from 'axios';

const baseUrl = `https://api.punkapi.com/v2`;

export default {
  getBeers: () => {
    return axios.get(`${baseUrl}/beers?page=1&per_page=80`);
  },
  getSingleBeer: id => {
    return axios.get(`${baseUrl}/beers/${id}`);
  },
  getRandomBeers: () => {
    return axios.get(`${baseUrl}/beers/random`);
  },
};
