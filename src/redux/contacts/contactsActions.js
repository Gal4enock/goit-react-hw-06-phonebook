import { v4 as uuidv4 } from 'uuid';

const addContacts = (name, number) => ({
  type: "contact/add",
  payload: {
    contact = {
      name,
      id: uuidv4(),
      number
      }
  }
})

const handleDelete = nameId => ({
  type: "contact/del",
  payload: {id: nameId}
})