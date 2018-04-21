import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers/index"
import logger from 'redux-logger';
import { createCycleMiddleware } from 'redux-cycles';
import { makeHTTPDriver } from '@cycle/http';
import { run } from '@cycle/run';
import main from '../cycles/index';

const cycleMiddleware = createCycleMiddleware();
const { makeActionDriver, makeStateDriver } = cycleMiddleware;

const store = createStore(
  rootReducer,
  applyMiddleware(cycleMiddleware, logger)
);

run(main, {
  ACTION: makeActionDriver(),
  STATE: makeStateDriver(),
  HTTP: makeHTTPDriver()
});

export default store;