import { call, put } from 'redux-saga/effects';
import { AppLogger } from '../../../../core';
import { HomeActionTypes } from '../../redux';
import HomeApi from '../HomeApi';

// service status
const {
  HOME_MOVIES_REQUEST_SUCCESS,
  HOME_MOVIES_REQUEST_FAILURE,
} = HomeActionTypes;

// service query
const {
  homeMoviesQuery,
} = HomeApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getMovies() {
  try {
    const response = yield call(homeMoviesQuery);
    AppLogger.error('[HomeMoviesService] Service call '
        + `${homeMoviesQuery} OK`, response);
    if (response) {
      // dispatch a success action
      // to the store with the data
      yield put({
        type: HOME_MOVIES_REQUEST_SUCCESS,
        movies: response,
      });
    } else {
      // dispatch a failure action
      // to the store with the error
      yield put({
        type: HOME_MOVIES_REQUEST_FAILURE,
        error: new Error('[HomeMoviesService] Service call error'),
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    AppLogger.error('[HomeMoviesService] Service call '
          + `${homeMoviesQuery} KO`, error);
    yield put({
      type: HOME_MOVIES_REQUEST_FAILURE,
      error,
    });
  }
}
