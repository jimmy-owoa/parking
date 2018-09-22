import { combineReducers } from 'redux';

import { reducer as carsReducer } from './cars/reducer';
import { reducer as authReducer } from './Auth/reducer'; 

export const reducer = combineReducers({
  cars: carsReducer,
  auth: authReducer
})
