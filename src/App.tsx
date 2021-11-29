import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { setLocale } from 'lib/i18n/i18n'
import { PersistGate } from 'redux-persist/integration/react'
import Routes from 'routes'
import storeConfig from 'store/StoreConfig'
import GlobalStyle from 'theme/global.styles'

const App: React.FC = () => {
  const [locale] = useState<string>(navigator.language)
  const { store, persistor } = storeConfig()
  setLocale(locale)

  return (
    <Provider store={store}>
      <PersistGate loading={<h1>loading</h1>} persistor={persistor}>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
