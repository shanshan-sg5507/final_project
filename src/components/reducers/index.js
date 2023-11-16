import { combineReducers } from 'redux';
import cartReducer from "./cartReducer";


// single source of truth: 
// - all states stored in a SINGLE OBJECT
// --> easier to debug, inspect and keep track

// state is read-only:
// only way to chang is to trigger an action:
// - cartAction fn's will be triggered and get the type, payload 
// as an action in cartReducer --> update the state

// changes can only be made with pure functions: 
// - reducer updates the state, if simply update the state, won't trigger re-rendering process
// with reducer, will trigger re-rerendering

// unidirection data flow

const rootReducer = combineReducers({
    cart: cartReducer,
});

export default rootReducer