// const phonebookReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case 'contact':
//       return [...state, payload];
//     case 'delete':
//       return state.filter(item => item.id !== payload);
//     case 'getFromLocalStorage':
//       return [...payload];
//     default:
//       return [...state];
//   }
// };

import { createReducer } from '@reduxjs/toolkit';

const phonebookReducer = createReducer([], {
  'phonebook/add': (state, { payload }) => [...state, payload],
  'phonebook/delete': (state, { payload }) =>
    state.filter(item => item.id !== payload),
});
export default phonebookReducer;
