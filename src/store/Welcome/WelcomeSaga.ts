import { takeLatest, put } from 'redux-saga/effects'
import {
  welcomeMessageSuccess,
  welcomeRequestMessageFail,
} from 'store/Welcome/WelcomeCreators'
import { EWelcomeActions } from 'store/Welcome/WelcomeTypes'

export function* getMessage() {
  try {
    yield put(welcomeMessageSuccess('Get message with success'))
  } catch (error) {
    yield put(welcomeRequestMessageFail('Request message fail'))
  }
}

export default function* () {
  yield takeLatest(EWelcomeActions.requestMessage, getMessage)
}
