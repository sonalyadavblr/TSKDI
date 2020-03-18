
import { createStore } from 'redux';
import loginReducer from './reducers/login';

const store = createStore(loginReducer);

export default store;