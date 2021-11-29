import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux'

import { TApplicationState } from 'store/StoreConfig'

export const useSelector: TypedUseSelectorHook<TApplicationState> = _useSelector
