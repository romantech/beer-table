import axios from 'axios';

export default {
  getBeerList: () => {
    return axios.get(`https://api.punkapi.com/v2/beers`);
  },
};
