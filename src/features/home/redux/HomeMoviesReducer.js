import HomeActionTypes from './HomeActionTypes';

// reducer initial state
const initialState = {
  movies: null,
  loading: false,
  error: null,
};

const HomeMoviesReducer = (
  state = initialState,
  action,
) => {
  let newState = state;
  switch (action.type) {
    case HomeActionTypes.HOME_MOVIES_REQUEST:
      newState = {
        ...state,
        movies: null,
        loading: true,
        error: null,
      };
      break;
    case HomeActionTypes.HOME_MOVIES_REQUEST_SUCCESS:
      newState = {
        ...state,
        movies: action.movies,
        loading: false,
        error: null,
      };
      break;
    case HomeActionTypes.HOME_MOVIES_REQUEST_FAILURE:
      newState = {
        ...state,
        movies: null,
        loading: false,
        error: action.error,
      };
      break;
    default:
      break;
  }
  return newState;
};

export default HomeMoviesReducer;
