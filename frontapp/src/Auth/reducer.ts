import { AUTH_FORM } from '../../constants/protoTypes';
import { CHANGE_AUTH_FORM } from '../../constants/index';

export const reducer = (state = AUTH_FORM, action) => {
  switch(action.type) {
    case CHANGE_AUTH_FORM:
      return {
        ...state,
        ...action.auth
      }
    default:
      return state;
  }
}