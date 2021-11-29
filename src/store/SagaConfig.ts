import { all, spawn, call } from 'redux-saga/effects'
import welcomeSaga from 'store/Welcome/WelcomeSaga'

const sagas = [welcomeSaga]

export default function* SagaConfig(): Generator {
  yield all(
    sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error)
          }
        }
      }),
    ),
  )
}
