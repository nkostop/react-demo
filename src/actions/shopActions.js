import * as Actions from './actionTypes';

export function receiveShops(payload){
  return {
    type: Actions.RECEIVE_SHOPS,
    payload
  }
}

export function receiveShopsSucceed(payload){
  return {
    type: Actions.RECEIVE_SHOPS_SUCCEED,
    payload
  }
}