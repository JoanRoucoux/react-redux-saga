import { takeEvery } from 'redux-saga/effects';
import { HomeActionTypes } from '../redux';
import HomeMoviesService from './home-movies-service/HomeMoviesService';

const HomeServicesRoot = [
  takeEvery(
    HomeActionTypes.HOME_MOVIES_REQUEST,
    HomeMoviesService,
  ),
];

export default HomeServicesRoot;
