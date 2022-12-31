import React from 'react';
import { connect } from 'react-redux';
import {
  Button, Checkbox, Divider, Form, Header
} from 'semantic-ui-react';

const mapStateToProps = (state) => ({
  defaultTab: state.payroll.payrollSettingsDefaultTabOptions,
});

const mapDispatchToProps = () => ({});

function SettingsTab(props) {
  return (
    <div className='ui bottom attached active tab segment' data-tab='settings'>
      <Form>

        <Divider horizontal>
          <Header size='small' content='Global' className='utbx-uppercase' />
        </Divider>

        <Form.Select label='Default Tab' options={props.defaultTab} value='header' />

        <Divider hidden />

        <Checkbox toggle label='Show Data Animations' />

        <Divider hidden />

        <Divider horizontal>
          <Header size='small' content='Header' className='utbx-uppercase' />
        </Divider>

        <Checkbox toggle defaultChecked label='Auto-Detect Payroll Form' />

        <Divider hidden />

        <Divider horizontal>
          <Header size='small' content='Members' className='utbx-uppercase' />
        </Divider>

        <Checkbox toggle defaultChecked label='Only Show Last 4-digits of SSN' />

        <Divider hidden />

        <Button primary content='Apply' />
        <Button content='Defaults' />
      </Form>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsTab);
