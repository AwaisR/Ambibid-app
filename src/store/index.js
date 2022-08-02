import { createStore, applyMiddleware, compose } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer';

const loggerMiddleware = createLogger();

// const store = createStore(rootReducer, applyMiddleware(
//     thunkMiddleware,
//     loggerMiddleware
// ));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)),
);
export default store;
