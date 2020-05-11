import HomeActionTypes from './HomeActionTypes';

const {
  HOME_MOVIES_REQUEST,
} = HomeActionTypes;

const requestMovies = () => ({
  type: HOME_MOVIES_REQUEST,
});

const HomeDispatcher = {
  requestMovies,
};

export default HomeDispatcher;
