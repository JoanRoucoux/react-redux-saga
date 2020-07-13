import { call, put } from 'redux-saga/effects';
import { AppLogger } from '../../../../core';
import { HomeActionTypes } from '../../redux';
import { HomeConfig } from '../../commons';
import HomeApi from '../HomeApi';

// service status
const {
  HOME_POPULAR_TV_SHOWS_REQUEST_SUCCESS,
  HOME_POPULAR_TV_SHOWS_REQUEST_FAILURE,
} = HomeActionTypes;

const {
  formatMediaList,
} = HomeConfig;

// service query
const {
  homePopularTvShowsQuery,
} = HomeApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getPopularTvShows() {
  try {
    const response = yield call(homePopularTvShowsQuery);
    AppLogger.info('[HomePopularTvShowsService] Service call '
      + 'homePopularTvShowsQuery OK', response);
    if (response) {
      // get formatted popular tv shows
      const formattedPopularTvShows = formatMediaList(response?.data?.results);

      // dispatch a success action
      // to the store with the data
      yield put({
        type: HOME_POPULAR_TV_SHOWS_REQUEST_SUCCESS,
        popularTvShows: formattedPopularTvShows,
      });
    } else {
      // dispatch a failure action
      // to the store with the error
      yield put({
        type: HOME_POPULAR_TV_SHOWS_REQUEST_FAILURE,
        error: new Error('[HomePopularTvShowsService] Service call '
          + 'homePopularTvShowsQuery OK but no response'),
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    AppLogger.error('[HomePopularTvShowsService] Service call '
          + 'homePopularTvShowsQuery KO', error);
    yield put({
      type: HOME_POPULAR_TV_SHOWS_REQUEST_FAILURE,
      error,
    });
  }
}
