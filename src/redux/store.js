import { createStore, combineRedusers } from 'redux';

const rootReducer = combineRedusers({});

const reducer = (state = {}, action) => state;

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

export default store;