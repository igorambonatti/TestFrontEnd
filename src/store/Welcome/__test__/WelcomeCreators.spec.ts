import { AnyAction } from 'redux'
import {
  WELCOME_INITIAL_STATE,
  WelcomeReducer,
  welcomeMessageSuccess,
  welcomeRequestMessageFail,
} from 'store/Welcome/WelcomeCreators'

describe('Welcome Creators', () => {
  test('should reducer init with default state', () => {
    const state = WelcomeReducer(undefined, {} as AnyAction)

    expect(state).toStrictEqual(WELCOME_INITIAL_STATE)
  })

  test('should update reducer state when messageSuccess', () => {
    const state = WelcomeReducer(
      undefined,
      welcomeMessageSuccess('Test message'),
    )

    expect(state).toStrictEqual({
      ...WELCOME_INITIAL_STATE,
      message: 'Test message',
    })
  })

  test('should update reducer state when messageFail', () => {
    const state = WelcomeReducer(
      undefined,
      welcomeRequestMessageFail('Message fail'),
    )

    expect(state).toStrictEqual({
      ...WELCOME_INITIAL_STATE,
      errorMessage: 'Message fail',
    })
  })
})
