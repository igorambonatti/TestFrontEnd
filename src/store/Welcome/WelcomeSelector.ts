import { createSelector } from 'reselect'
import { TApplicationState } from 'store/StoreConfig'

export const getWelcomeMessage = createSelector(
  (state: TApplicationState) => state.welcome,
  ({ message }) => message,
)
export const getOfflineList = createSelector(
  (state: TApplicationState) => state.welcome,
  ({ invoiceOffline }) => invoiceOffline,
)
export const getOnlineList = createSelector(
  (state: TApplicationState) => state.welcome,
  ({ invoicesIntegrated }) => invoicesIntegrated,
)
