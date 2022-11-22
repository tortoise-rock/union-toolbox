import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class ButtonTest extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Button>{this.props.content}</Button>
      </>
    );
  }
}

export default ButtonTest;
