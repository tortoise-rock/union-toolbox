import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';

function Main() {
  return (
    <div className='ui fluid container' id='main'>
      <div className='ui grid'>
        <Content />
        <Sidebar />
      </div>
    </div>
  );
}

export default Main;
