import { SUBMIT_USER, USER_TEXT, PASS_TEXT } from "./types";

function inputReducer(state = [], action) {
  console.log(action)
    switch (action.type) {
      case USER_TEXT:
        return state.username = action.text
      case PASS_TEXT:
        return state.password = action.text
      case SUBMIT_USER:
        return state.user = action.user
      default:
        return state
    }
  }

  export default inputReducer;