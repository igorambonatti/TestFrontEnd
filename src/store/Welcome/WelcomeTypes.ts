export interface IWelcomeState {
  message: string
  errorMessage: string
  invoiceOffline: any[]
  invoicesIntegrated: any[]
}

export enum EWelcomeActions {
  requestOfflineList = '@welcome/REQUEST_OFFLINE_LIST',
  requestOnlineList = '@welcome/REQUEST_ONLINE_LIST',
  setOnlineList = '@welcome/REQUEST_ONLINE_LIST',
  setOfflineList = '@welcome/REQUEST_OFFLINE_LIST',
  requestMessage = '@welcome/REQUEST_MESSAGE',
  messageSuccess = '@welcome/MESSAGE_SUCCESS',
  requestMessageFail = '@welcome/REQUEST_MESSAGE_FAIL',
}
