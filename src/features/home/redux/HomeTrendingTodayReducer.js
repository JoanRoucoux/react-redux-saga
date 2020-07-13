import HomeActionTypes from './HomeActionTypes';

// reducer initial state
const initialState = {
  trendingToday: null,
  loading: false,
  error: null,
};

const HomeTrendingTodayReducer = (
  state = initialState,
  action,
) => {
  let newState = state;
  switch (action.type) {
    case HomeActionTypes.HOME_TRENDING_TODAY_REQUEST:
      newState = {
        ...state,
        trendingToday: null,
        loading: true,
        error: null,
      };
      break;
    case HomeActionTypes.HOME_TRENDING_TODAY_REQUEST_SUCCESS:
      newState = {
        ...state,
        trendingToday: action.trendingToday,
        loading: false,
        error: null,
      };
      break;
    case HomeActionTypes.HOME_TRENDING_TODAY_REQUEST_FAILURE:
      newState = {
        ...state,
        trendingToday: null,
        loading: false,
        error: action.error,
      };
      break;
    default:
      break;
  }
  return newState;
};

export default HomeTrendingTodayReducer;
