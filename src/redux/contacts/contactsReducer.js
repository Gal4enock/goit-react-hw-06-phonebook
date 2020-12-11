import { combineReducers } from 'redux';
import constants from '../constants.js';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case constants.ADD:
      return [...state, payload.contact];
    case constants.DELETE:
      return state.filter (contact => contact.id !== payload.id)
    default:
      return state;
  }
};
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case constants.FILTER:
      return payload.filter
    default:
      return state;
  }
};

export default combineReducers ({items, filter})


// handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   }
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