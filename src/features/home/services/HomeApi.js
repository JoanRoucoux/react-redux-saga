import axios from 'axios';
import HomeServicesConstants from './HomeServicesConstants';

// service path
const {
  GET_HOME_POPULAR_MOVIES_SERVICE_PATH,
  GET_HOME_POPULAR_TV_SHOWS_SERVICE_PATH,
  GET_HOME_TRENDING_TODAY_SERVICE_PATH,
} = HomeServicesConstants;

const homePopularMoviesQuery = async () => {
  const url = `${process.env.REACT_APP_BASE_URL}${GET_HOME_POPULAR_MOVIES_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  });
};

const homePopularTvShowsQuery = async () => {
  const url = `${process.env.REACT_APP_BASE_URL}${GET_HOME_POPULAR_TV_SHOWS_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  });
};

const homeTrendingTodayQuery = async () => {
  const url = `${process.env.REACT_APP_BASE_URL}${GET_HOME_TRENDING_TODAY_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  });
};

const HomeApi = {
  homePopularMoviesQuery,
  homePopularTvShowsQuery,
  homeTrendingTodayQuery,
};

export default HomeApi;
