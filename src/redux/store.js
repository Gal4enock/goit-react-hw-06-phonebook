import { createStore, combineReducers } from 'redux';
import contactsReducer from './contacts/contactsReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const reducer = (state = {}, action) => state;

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

export default store;