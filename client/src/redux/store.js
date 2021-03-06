import { createStore } from 'redux'; 
import rootReducer from "./reducers/index";

// Reducer function. 1st argument is state, 2nd argument is what changes that state. 
// function todos(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return state.concat([action.text])
//     case 'ADD_THISDO':
//       return state.concat([action.text])
//     case 'USERNAME_TEXT':
//       return console.log(state)
//     default:
//       return state
//   }
// }

const appState = {};

// Store
const store = createStore(rootReducer, appState);

export default store;