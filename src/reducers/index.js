import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import coffeeshopsReducer from "./coffeeshopsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  shops: coffeeshopsReducer,
});

export default rootReducer;