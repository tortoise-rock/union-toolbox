import React, { Component } from 'react';
import Content from './Content';
import Sidebar from './Sidebar';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2>Main</h2>
        <Content />
        <Sidebar />
      </>
    );
  }
}

export default Main;
