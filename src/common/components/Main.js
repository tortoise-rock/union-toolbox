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
        <div className='ui fluid container' id='main'>
          <div className='ui grid'>
            <Content />
            <Sidebar />
          </div>
        </div>
      </>
    );
  }
}

export default Main;
