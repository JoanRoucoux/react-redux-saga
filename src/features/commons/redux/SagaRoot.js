import { all } from 'redux-saga/effects';
import HomeServicesRoot from '../../home/services/HomeServicesRoot';

// add here all your saga service root
export default function* rootSaga() {
  yield all([
    ...HomeServicesRoot,
  ]);
}
