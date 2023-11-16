import {createStore} from 'redux';
import rootReducer from './reducers'; 
// will go to index.js, no need to explicitly write it out

const store = createStore(rootReducer);

export default store;



// if all need states, dont pass the props
// using context will have each wrapping the other - in an arrow shape
// thus we use redux so there's no need for wrapping
// each obj. has its reducer & action