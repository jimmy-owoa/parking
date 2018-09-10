import * as React from 'react';

import PublicParking from './layout/PublicParking';

class App extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <PublicParking />
    );
  }
}

export default App;
