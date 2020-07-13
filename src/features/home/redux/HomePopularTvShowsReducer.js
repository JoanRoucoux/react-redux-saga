import HomeActionTypes from './HomeActionTypes';

// reducer initial state
const initialState = {
  popularTvShows: null,
  loading: false,
  error: null,
};

const HomePopularTvShowsReducer = (
  state = initialState,
  action,
) => {
  let newState = state;
  switch (action.type) {
    case HomeActionTypes.HOME_POPULAR_TV_SHOWS_REQUEST:
      newState = {
        ...state,
        popularTvShows: null,
        loading: true,
        error: null,
      };
      break;
    case HomeActionTypes.HOME_POPULAR_TV_SHOWS_REQUEST_SUCCESS:
      newState = {
        ...state,
        popularTvShows: action.popularTvShows,
        loading: false,
        error: null,
      };
      break;
    case HomeActionTypes.HOME_POPULAR_TV_SHOWS_REQUEST_FAILURE:
      newState = {
        ...state,
        popularTvShows: null,
        loading: false,
        error: action.error,
      };
      break;
    default:
      break;
  }
  return newState;
};

export default HomePopularTvShowsReducer;
