import * as React from 'react';

export const Login = (props) => {
  let { auth, changeAuthForm, submitForm } = props;
  return (
    <div className="row grey lighten-4" style={{height: '100vh'}}>
      <div className="col s12 m12 l6 xl6 offset-l3 offset-xl3" style={{marginTop: '8rem'}}>
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <form>
                <div className="center">
                  <img src="/assets/Iep_logo.png" alt="" className="iep_image"/>
                </div>
                <div className="input-field">
                  <input
                    type="email"
                    name="email"
                    className="validate"
                    value={auth["email"]}
                    onChange={(event) => changeAuthForm('email', event.target.value)}
                  />
                  <label htmlFor="">Correo</label>
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    name="password"
                    className="validate"
                    value={auth["password"]}
                    onChange={(event) => changeAuthForm('password', event.target.value)}
                  />
                  <label htmlFor="">Contraseña</label>
                </div>
                <div className="input-field" onClick={() => changeAuthForm('rememberMe', !auth["rememberMe"] )}>
                  <input
                    type="checkbox"
                    checked={auth["rememberMe"]}
                  />
                  <label
                    htmlFor=""
                  >
                    Recordarme
                  </label>
                </div>
                <div className="input-field" style={{marginTop: '2rem'}}>
                  <button
                    className="btn btn-large btn-block"
                    onClick={() => submitForm(auth)}
                  >
                    Ingresar
                  </button>
                </div>
              </form>
            </div>
            <div className="card-action"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
