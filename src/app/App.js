import React, { Component } from 'react';
import Header from '../common/components/Header';
import Main from '../common/components/Main';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
