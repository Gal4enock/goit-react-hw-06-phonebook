import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions.js';

const toAddContact = (state, action) => {
  const doubleName = state.find(el => el.name === action.payload.contact.name);
    if (doubleName) {
      alert(`${action.payload.contact.name} is already in contacts`);
      return
    }
  return [...state, action.payload.contact];
}
const toFilterContact = (state, action) => state.filter(contact => contact.id !== action.payload.id);

const items = createReducer([], {
  [contactsActions.addContacts.type]: toAddContact,
  [contactsActions.handleDelete.type]: toFilterContact
})


const filter = createReducer('', {
  [contactsActions.handleFilter.type]: (state, action) => action.payload.filter
})

export default combineReducers ({items, filter})


// addContacts = (name, number) => {
//     const contact = {
//       name,
//       id: uuidv4(),
//       number
//       };
//     this.setState({doubleName: null})
//     const doubleName = this.state.contacts.find(el => el.name === contact.name);
//     if (doubleName) {

//         this.setState({ doubleName: contact.name })
//         setTimeout(() => {
//           this.setState({ doubleName: null })
//         }, 2000)
      
//       return 
//     }
//     this.setState(prevState => {
//       return {
//         contacts: [...prevState.contacts, contact]
//       }
//     })
//   }
  
  

//    handleFilter = () => {
//       const { contacts, filter } = this.state;
//       return (contacts.length ? contacts.filter((contact => contact.name.toLowerCase().includes(filter.toLowerCase()) )) : [])
      
//     }