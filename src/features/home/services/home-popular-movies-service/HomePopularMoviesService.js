import { call, put } from 'redux-saga/effects';
import { AppLogger } from '../../../../core';
import { HomeActionTypes } from '../../redux';
import { HomeConfig } from '../../commons';
import HomeApi from '../HomeApi';

// service status
const {
  HOME_POPULAR_MOVIES_REQUEST_SUCCESS,
  HOME_POPULAR_MOVIES_REQUEST_FAILURE,
} = HomeActionTypes;

const {
  formatMediaList,
} = HomeConfig;

// service query
const {
  homePopularMoviesQuery,
} = HomeApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getPopularMovies() {
  try {
    const response = yield call(homePopularMoviesQuery);
    AppLogger.info('[HomePopularMoviesService] Service call '
      + 'homePopularMoviesQuery OK', response);
    if (response) {
      // get formatted popular movies
      const formattedPopularMovies = formatMediaList(response?.data?.results);

      // dispatch a success action
      // to the store with the data
      yield put({
        type: HOME_POPULAR_MOVIES_REQUEST_SUCCESS,
        popularMovies: formattedPopularMovies,
      });
    } else {
      // dispatch a failure action
      // to the store with the error
      yield put({
        type: HOME_POPULAR_MOVIES_REQUEST_FAILURE,
        error: new Error('[HomePopularMoviesService] Service call '
          + 'homePopularMoviesQuery OK but no response'),
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    AppLogger.error('[HomePopularMoviesService] Service call '
          + 'homePopularMoviesQuery KO', error);
    yield put({
      type: HOME_POPULAR_MOVIES_REQUEST_FAILURE,
      error,
    });
  }
}
