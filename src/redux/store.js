import { configureStore } from '@reduxjs/toolkit'
import { ContactsReducer} from './ContactsSlice'
import { FilterSlice } from './FilterSlice'

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';



export const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
    filter: FilterSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store)


