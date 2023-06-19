import { createSlice } from '@reduxjs/toolkit'
import Contacts from '../json/Contacts';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

 const ContactsSlice = createSlice({
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
  key: 'root',
  storage,
   whitelist: ['value']
}

export const ContactsReducer = persistReducer(persistConfig,
  ContactsSlice.reducer)


export const { AddContact, DeleteContact } = ContactsSlice.actions;