import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
// import constants from '../constants.js';

const addContacts = createAction('contact/add', (name, number) => {
  return {
    payload: {
      contact: {
        name,
        id: uuidv4(),
        number
      }
    }
  }
})

const handleDelete = createAction('contact/del')

const handleFilter = createAction('contact/filter', filter=> ({payload: {filter}}) )

const postContacts = createAction('contacts/post')

export default {
  addContacts,
  handleDelete,
  handleFilter,
  postContacts
}