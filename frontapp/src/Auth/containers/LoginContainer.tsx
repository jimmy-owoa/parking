import * as React from 'react';
import { connect } from 'react-redux';

import { Login } from '../components';
import { changeAuthForm, submitForm } from '../actions';

class LoginContainer extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Login {...this.props}/>
    )
  }
}

const mapStateToProps = state => {
  let { auth } = state;
  return {
    auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeAuthForm(name, value) {
      dispatch(changeAuthForm(name, value));
    },
    submitForm(auth) {
      dispatch(submitForm(auth));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);
