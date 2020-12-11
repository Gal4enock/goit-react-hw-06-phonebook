import { v4 as uuidv4 } from 'uuid';
import constants from '../constants.js';

const addContacts = (name, number) => ({
  type: constants.ADD,
  payload: {
    contact: {
      name,
      id: uuidv4(),
      number
      }
  }
})

const handleDelete = nameId => ({
  type: constants.DELETE,
  payload: {id: nameId}
})

const handleFilter = filter => ({
  type: constants.FILTER,
  payload: {filter}
})

export default {
  addContacts,
  handleDelete,
  handleFilter
}