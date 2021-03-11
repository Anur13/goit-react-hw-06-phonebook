import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from 'redux';
import filterReducer from '../Redux/filter/filter-reducer';
import phonebookReducer from '../Redux/phonebook/phonebook-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const contactsReducer = combineReducers({
  items: phonebookReducer,
  filter: filterReducer,
});
const rootReducer = combineReducers({ contacts: contactsReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, composeWithDevTools());
let persistor = persistStore(store);

export { store, persistor };
