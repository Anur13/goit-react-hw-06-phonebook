import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// const submit = value => ({
//   type: 'contact',
//   payload: { ...value, id: uuidv4() },
// });

// const deleteItem = id => ({
//   type: 'delete',
//   payload: id,
// });
const getFromLocalStorage = arr => ({
  type: 'getFromLocalStorage',
  payload: arr,
});

const deleteItem = createAction('phonebook/delete');
const submit = createAction('phonebook/add', value => ({
  payload: { ...value, id: uuidv4() },
}));
export { submit, deleteItem, getFromLocalStorage };
