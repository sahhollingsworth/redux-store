//Create redux store that holds the state of the app
import { createStore } from 'redux';

import reducers from './reducers';

//Create store using the reducer function output
export default createStore(reducers);