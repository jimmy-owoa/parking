import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from '../src/reducer';

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

let ENVIRONMENT = window["env"];

const logger = ENVIRONMENT == DEVELOPMENT
              ? store => next => action => {
                console.log('dispatching', action);
                let result = next(action);
                console.log('next state', store.getState());
                return result
              }
              : store => next => action => {}

let store = ENVIRONMENT == DEVELOPMENT
            ? createStore( reducer, compose(applyMiddleware(thunk, logger)))
            : createStore( reducer, compose(applyMiddleware(thunk)));

export default store;
