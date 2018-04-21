import {combineCycles} from "redux-cycles";
import * as Actions from '../actions/actionTypes';
import * as action from '../actions/shopActions';
import xs from 'xstream';

export function getShops(sources){
  const request$ = sources.ACTION
    .filter(action => action.type === Actions.RECEIVE_SHOPS)
    .map(action => ({
      url: "http://localhost:5000/api/CoffeeShops",
      category: 'coffeeshops',
      method: 'GET',
      type: 'application/json'
    }))

  let response$ = sources.HTTP
    .select('coffeeshops')
    .map((response) => 
    response.replaceError((err) => xs.of(err))
    )
    .flatten()
    .filter(response => response.status ===200)
    .map(response => action.receiveShopsSucceed(JSON.parse(response.text)));

  return {
    ACTION: response$,
    HTTP: request$,
  }
}

export default combineCycles(getShops);