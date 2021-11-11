import axios from 'axios';

const baseUrl = `https://api.punkapi.com/v2`;

export default {
  getBeersByPage: (page, num) => {
    return axios.get(`${baseUrl}/beers?page=${page}&per_page=${num}`);
  },
  getSingleBeer: id => {
    return axios.get(`${baseUrl}/beers/${id}`);
  },
  getRandomBeers: () => {
    return axios.get(`${baseUrl}/beers/random`);
  },
};
