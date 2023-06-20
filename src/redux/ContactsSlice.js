import { createSlice } from '@reduxjs/toolkit';
import Contacts from '../json/Contacts';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    value: Contacts,
  },
  reducers: {
    addContact(state, action) {
      state.value.push(action.payload);
    },
    deleteContact(state, action) {
      state.value = state.value.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['value'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;