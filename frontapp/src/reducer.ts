import { combineReducers } from 'redux';

import { reducer as carsReducer } from './cars/reducer';

export const reducer = combineReducers({
  cars: carsReducer
})
