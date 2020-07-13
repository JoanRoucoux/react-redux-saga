import HomeActionTypes from './HomeActionTypes';

// reducer initial state
const initialState = {
  popularMovies: null,
  loading: false,
  error: null,
};

const HomePopularMoviesReducer = (
  state = initialState,
  action,
) => {
  let newState = state;
  switch (action.type) {
    case HomeActionTypes.HOME_POPULAR_MOVIES_REQUEST:
      newState = {
        ...state,
        popularMovies: null,
        loading: true,
        error: null,
      };
      break;
    case HomeActionTypes.HOME_POPULAR_MOVIES_REQUEST_SUCCESS:
      newState = {
        ...state,
        popularMovies: action.popularMovies,
        loading: false,
        error: null,
      };
      break;
    case HomeActionTypes.HOME_POPULAR_MOVIES_REQUEST_FAILURE:
      newState = {
        ...state,
        popularMovies: null,
        loading: false,
        error: action.error,
      };
      break;
    default:
      break;
  }
  return newState;
};

export default HomePopularMoviesReducer;
