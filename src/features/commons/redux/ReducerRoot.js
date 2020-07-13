import {
  HomePopularMoviesReducer,
  HomePopularTvShowsReducer,
  HomeTrendingTodayReducer,
} from '../../home/redux';
import ThemeTypeReducer from './ThemeTypeReducer';

// import all reducers here
const ReducerRoot = {
  // THEME
  ThemeType: ThemeTypeReducer,

  // HOME
  HomePopularMovies: HomePopularMoviesReducer,
  HomePopularTvShows: HomePopularTvShowsReducer,
  HomeTrendingToday: HomeTrendingTodayReducer,
};

export default ReducerRoot;
