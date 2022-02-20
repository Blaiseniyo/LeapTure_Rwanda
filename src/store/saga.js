import { all } from 'redux-saga/effects'

import {
  QR_REQUEST_SAGA,
  SPLASH_SAGA,
  StatusSagas,
  WEATHER_SAGA
} from '../screens/Splash/Redux'

export default function* rootSaga() {
  yield all([...StatusSagas])

  yield all([...SPLASH_SAGA])

  yield all([...QR_REQUEST_SAGA])

  yield all([...WEATHER_SAGA])
}
