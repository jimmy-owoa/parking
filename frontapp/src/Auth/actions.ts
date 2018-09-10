import axios from 'axios';
import { CHANGE_AUTH_FORM } from '../../constants/index';

export const changeAuthForm = (name, value) => {
  let auth = {}
  auth[name] = value;
  return {
    type: CHANGE_AUTH_FORM,
    auth
  }
}

export const submitForm = (auth) => {
  return dispatch => {
    axios.post('/login', {user: auth})
      .then(response => {
        let { data } = response;
        let { rootPath } = data;
        location.href = rootPath;
      })
      .catch(error => {

      })
  }
}