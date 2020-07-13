import HomeActionTypes from './HomeActionTypes';

const {
  HOME_POPULAR_MOVIES_REQUEST,
  HOME_POPULAR_TV_SHOWS_REQUEST,
  HOME_TRENDING_TODAY_REQUEST,
} = HomeActionTypes;

const requestPopularMovies = () => ({
  type: HOME_POPULAR_MOVIES_REQUEST,
});

const requestPopularTvShows = () => ({
  type: HOME_POPULAR_TV_SHOWS_REQUEST,
});

const requestTrendingToday = () => ({
  type: HOME_TRENDING_TODAY_REQUEST,
});

const HomeDispatcher = {
  requestPopularMovies,
  requestPopularTvShows,
  requestTrendingToday,
};

export default HomeDispatcher;
