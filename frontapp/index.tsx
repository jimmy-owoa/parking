import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './src/App';
import store from './store';

let element = (document.getElementById("parking_frontapp") as any)

ReactDOM.render(
  <Provider store={store}>
    <App name="Jose"/>
  </Provider>,
  element
)
