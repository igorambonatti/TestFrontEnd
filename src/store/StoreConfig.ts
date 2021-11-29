import { applyMiddleware, createStore, Store, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import sagaConfig from 'store/SagaConfig'
import { WelcomeReducer } from 'store/Welcome/WelcomeCreators'

export type TApplicationState = ReturnType<typeof PersistedReducer>

const PERSIST_CONFIG = {
  key: 'root',
  storage,
}

export const combinedReducers = combineReducers({ welcome: WelcomeReducer })

export const PersistedReducer = persistReducer(PERSIST_CONFIG, combinedReducers)
export const SagaMiddleware = createSagaMiddleware()

const store: Store<TApplicationState> = createStore(
  PersistedReducer,
  composeWithDevTools(applyMiddleware(SagaMiddleware)),
)

SagaMiddleware.run(sagaConfig)

export default () => {
  const persistor = persistStore(store)
  return { store, persistor }
}
