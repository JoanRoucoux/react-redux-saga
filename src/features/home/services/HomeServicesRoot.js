import { takeEvery } from 'redux-saga/effects';
import { HomeActionTypes } from '../redux';
import HomePopularMoviesService from './home-popular-movies-service/HomePopularMoviesService';
import HomePopularTvShowsService from './home-popular-tv-shows-service/HomePopularTvShowsService';
import HomeTrendingTodayService from './home-trending-today-service/HomeTrendingTodayService';

const HomeServicesRoot = [
  takeEvery(
    HomeActionTypes.HOME_POPULAR_MOVIES_REQUEST,
    HomePopularMoviesService,
  ),
  takeEvery(
    HomeActionTypes.HOME_POPULAR_TV_SHOWS_REQUEST,
    HomePopularTvShowsService,
  ),
  takeEvery(
    HomeActionTypes.HOME_TRENDING_TODAY_REQUEST,
    HomeTrendingTodayService,
  ),
];

export default HomeServicesRoot;
