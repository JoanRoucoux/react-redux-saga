import { call, put } from 'redux-saga/effects';
import { AppLogger } from '../../../../core';
import { HomeActionTypes } from '../../redux';
import { HomeConfig } from '../../commons';
import HomeApi from '../HomeApi';

// service status
const {
  HOME_TRENDING_TODAY_REQUEST_SUCCESS,
  HOME_TRENDING_TODAY_REQUEST_FAILURE,
} = HomeActionTypes;

const {
  formatMediaList,
} = HomeConfig;

// service query
const {
  homeTrendingTodayQuery,
} = HomeApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getTrendingToday() {
  try {
    const response = yield call(homeTrendingTodayQuery);
    AppLogger.info('[HomeTrendingTodayService] Service call '
      + 'homeTrendingTodayQuery OK', response);
    if (response) {
      // get formatted trending today
      const formattedTrendingToday = formatMediaList(response?.data?.results);

      // dispatch a success action
      // to the store with the data
      yield put({
        type: HOME_TRENDING_TODAY_REQUEST_SUCCESS,
        trendingToday: formattedTrendingToday,
      });
    } else {
      // dispatch a failure action
      // to the store with the error
      yield put({
        type: HOME_TRENDING_TODAY_REQUEST_FAILURE,
        error: new Error('[HomeTrendingTodayService] Service call '
          + 'homeTrendingTodayQuery OK but no response'),
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    AppLogger.error('[HomeTrendingTodayService] Service call '
          + 'homeTrendingTodayQuery KO', error);
    yield put({
      type: HOME_TRENDING_TODAY_REQUEST_FAILURE,
      error,
    });
  }
}
