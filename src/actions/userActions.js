import * as Actions from "./actionTypes";

export function userLoginSuccess(payload){
  return {
    type: Actions.LOG_IN_USER_SUCCESS,
    payload
  }
}

export function changeTextField(payload){
  return {
    type: Actions.CHANGE_TEXTFIELD,
    payload
  }
}