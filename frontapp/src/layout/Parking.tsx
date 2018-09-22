import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { routes } from './routes';

export default class Parking extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router>
        <Switch>
          {
            routes.map((route, i) => (
              <Route
                path={route.path}
                component={() => <route.component />}
                exact={route.exact}
                key={i}
              />
            ))
          }
        </Switch>
      </Router>
    )
  }
}
