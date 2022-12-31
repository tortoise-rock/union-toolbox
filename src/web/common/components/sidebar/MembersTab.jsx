import React from 'react';
import { Divider, Form, Header } from 'semantic-ui-react';

function MembersTab() {
  return (
    <div className='ui bottom attached active tab segment' data-tab='member'>
      <Form>
        <Divider horizontal>
          <Header size='small' content='Page 1' className='utbx-uppercase' />
        </Divider>
      </Form>

      <div>WIP</div>
    </div>
  );
}

export default MembersTab;
