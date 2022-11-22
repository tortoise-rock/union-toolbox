import React, { Component } from 'react';
// import ButtonTest from './ButtonTest';
import ButtonTest from './ButtonTest';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h3>Sidebar</h3>
        <ButtonTest content='Button Text' />
      </>
    );
  }
}

export default Sidebar;
