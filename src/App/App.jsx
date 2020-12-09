import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {CSSTransition} from 'react-transition-group';

import Contacts from '../Contacts/Contacts';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../FilterContacts/FilterContacts';
import Notification from '../Notification';

import Style from './App.module.css'


class App extends Component {
  state = {
    contacts: [],
    filter: '',
    doubleName: null
  }

  localContacts = '';

  componentDidMount() {
   const localContacts = localStorage.getItem('contacts');
    if (localContacts) {
      this.setState({
        contacts: JSON.parse(localContacts)
      })
    } else return;
    
  }

  componentDidUpdate(prevProps, prevState) {
    return (this.state.contacts ? localStorage.setItem('contacts', JSON.stringify(this.state.contacts)) : [])
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  addContacts = (name, number) => {
    const contact = {
      name,
      id: uuidv4(),
      number
    };
    this.setState({doubleName: null})
    const doubleName = this.state.contacts.find(el => el.name === contact.name);
    if (doubleName) {
      
      // alert(`${contact.name} is already in contacts`);
      // return <Notification name={contact.name }/>
      
        this.setState({ doubleName: contact.name })
        setTimeout(() => {
          this.setState({ doubleName: null })
        }, 2000)
      
      return 
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      }
    })
  }
  
  
  handleDelete = nameId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== nameId)
      }
    })
  }
   handleFilter = () => {
      const { contacts, filter } = this.state;
      return (contacts.length ? contacts.filter((contact => contact.name.toLowerCase().includes(filter.toLowerCase()) )) : [])
      
    }
    
  render() {
    const { filter } = this.state;
    
    return (
      <div className={Style.Container}>
        <CSSTransition in={true} appear timeout={500} classNames={Style} unmountOnExit>
          <h1 className={Style.fontColor}>Phonebook</h1>
        </CSSTransition>
        <ContactForm toAddContacts={this.addContacts}/>
        <h2>Find contacts by name</h2>
        <Filter value={filter} toFilter={this.handleChange} />
        <Contacts contacts={this.handleFilter()} onDelete={this.handleDelete} />
          <CSSTransition in={this.state.doubleName} timeout={250} classNames={Style} unmountOnExit>
            <Notification name={this.state.doubleName} />
          </CSSTransition>
      </div>
    )
  }
}

export default App;
