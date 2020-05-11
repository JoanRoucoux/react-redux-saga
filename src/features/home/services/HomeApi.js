import axios from 'axios';
import HomeServicesConstants from './HomeServicesConstants';

// service path
const {
  GET_HOME_MOVIES_SERVICE_PATH,
} = HomeServicesConstants;

const homeMoviesQuery = async () => {
  const url = `https://api.themoviedb.org/3/${GET_HOME_MOVIES_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
    params: {
      api_key: process.env.API_KEY,
    },
  });
};

const HomeApi = {
  homeMoviesQuery,
};

export default HomeApi;
