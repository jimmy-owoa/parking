import * as React from 'react';

import Parking from './layout/Parking';

class App extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Parking />
    );
  }
}

export default App;
