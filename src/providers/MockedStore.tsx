import React from 'react'
import { Provider } from 'react-redux'

import StoreConfig from 'store/StoreConfig'

const { store } = StoreConfig()

const MockedStore: React.FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

export default MockedStore
