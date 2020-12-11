import { combineReducers } from 'redux';


const items = (state = [], action) => state;
const filter = (state = '', action) => state;

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
  
  
//   handleDelete = nameId => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(contact => contact.id !== nameId)
//       }
//     })
//   }
//    handleFilter = () => {
//       const { contacts, filter } = this.state;
//       return (contacts.length ? contacts.filter((contact => contact.name.toLowerCase().includes(filter.toLowerCase()) )) : [])
      
//     }