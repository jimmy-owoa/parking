import axios from '../../constants/api';
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
    axios({url: '/api/sessions', method: 'post', data: {user: auth}})
      .then(response => {
        let { data } = response;
        let { rootPath } = data;
        location.href = rootPath;
      })
      .catch(error => {
        console.log(error);
        alert();
      })
  }
}