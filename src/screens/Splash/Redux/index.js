import { takeEvery, takeLatest } from 'redux-saga/effects'
import * as types from './type'
import * as func from './saga'

export const LoginSagas = [
  takeLatest(types.LOGIN_REQUEST_WITHOUT_PARAMTER, func.LoginAsync),
]
export const QR_REQUEST_SAGA = [
  takeLatest(types.LOGIN_REQUEST_WITHOUT_PARAMTER, func.QR_Request),
]

export const SPLASH_SAGA = [
  takeLatest(types.SPLASH_GENERATE_QR_CODE_REQUEST, func.generate_QR_Number),
  takeLatest(types.SPLASH_CONNECTIVITY_REQUEST, func.Connectivity),
  takeLatest(types.NOTIFICATION_BINDING_REQUEST, func.NotificationsBinding),
]

export const WEATHER_SAGA = [
  takeLatest(types.GET_WEATHER, func.Weather),
  // takeLatest(types.GET_WEATHER_FAILURE, func.Weather)
]

export const StatusSagas = [takeEvery(types.REQUEST_STATUS, func.Status)]
