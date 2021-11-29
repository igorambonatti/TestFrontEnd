import produce from 'immer'
import { Reducer } from 'redux'
import { IWelcomeState, EWelcomeActions } from 'store/Welcome/WelcomeTypes'

export const WELCOME_INITIAL_STATE: IWelcomeState = {
  message: '',
  errorMessage: '',
  invoiceOffline: [],
  invoicesIntegrated: [],
}

export const WelcomeReducer: Reducer<IWelcomeState> = (
  state = WELCOME_INITIAL_STATE,
  { type, payload },
) => {
  return produce(state, draft => {
    switch (type) {
      case EWelcomeActions.setOfflineList: {
        draft.invoiceOffline = payload.data

        return draft
      }
      case EWelcomeActions.setOnlineList: {
        draft.invoicesIntegrated = payload.data
        return draft
      }
      case EWelcomeActions.messageSuccess: {
        draft.message = payload.message

        return draft
      }

      case EWelcomeActions.requestMessageFail: {
        draft.errorMessage = payload.message

        return draft
      }

      default: {
        return draft
      }
    }
  })
}

export const getOfflineList = () => ({
  type: EWelcomeActions.requestOfflineList,
})
export const getOnlineList = () => ({
  type: EWelcomeActions.requestOnlineList,
})

export const setOfflineList = (data: any[]) => ({
  type: EWelcomeActions.setOfflineList,
  payload: { data },
})

export const setOnlineList = (data: any) => ({
  type: EWelcomeActions.setOnlineList,
  payload: { data },
})

export const welcomeRequestMessage = () => ({
  type: EWelcomeActions.requestMessage,
})

export const welcomeRequestMessageFail = (message: string) => ({
  type: EWelcomeActions.requestMessageFail,
  payload: { message },
})

export const welcomeMessageSuccess = (message: string) => ({
  type: EWelcomeActions.messageSuccess,
  payload: { message },
})
