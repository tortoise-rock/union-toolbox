import React from 'react';
import { connect } from 'react-redux';
import {
  Button, Divider, Form, Header
} from 'semantic-ui-react';
import {
  getHeaderTabDataActionCreator,
  setTitleActionCreator
} from '../../../app/actions';

const mapStateToProps = (state) => ({
  payrollHeaderEmployer: state.payroll.payrollHeaderEmployer,
  payrollHeaderForm: state.payroll.payrollHeaderForm,
  payrollHeaderVersion: state.payroll.payrollHeaderVersion,
  payrollHeaderTitle: state.payroll.payrollHeaderTitle,
  payrollHeaderClient: state.payroll.payrollHeaderClient,
  payrollHeaderInvoiceNumber: state.payroll.payrollHeaderInvoiceNumber,
});

const mapDispatchToProps = (dispatch) => ({
  setTitleValue: () => dispatch(setTitleActionCreator('Title of event')),
  getHeaderTabData: () => dispatch(getHeaderTabDataActionCreator()),
});

const inputStyle = {
  fontFamily: 'monospace',
  color: '#616161',
};

function HeaderTab(props) {
  return (
    <>
      <div className='ui bottom attached active tab segment' data-tab='header'>
        <Form>
          <Divider horizontal>
            <Header as='h5' style={{ textTransform: 'uppercase' }}>
              Form
            </Header>
          </Divider>

          <Form.Field>
            <Form.Select label='Employer' options={props.payrollHeaderEmployer} placeholder='Select Employer' />
          </Form.Field>

          <Form.Field>
            <Form.Group>
              <Form.Select label='Form' options={props.payrollHeaderForm} placeholder='Select Form' width={9} />
              <Form.Select label='Version' options={props.payrollHeaderVersion} placeholder='Select Version' width={7} />
            </Form.Group>
          </Form.Field>

          <Button primary>Apply</Button>
          <Button>Detect</Button>

          <Divider horizontal>
            <Header as='h5' style={{ textTransform: 'uppercase' }}>
              Header
            </Header>
          </Divider>

          <Form.Input
            type='text'
            label='Title'
            name='title'
            id='payrollHeaderTitle'
            style={inputStyle}
            defaultValue={props.payrollHeaderTitle}
          />

          <Form.Input
            label='Client'
            type='text'
            name='client'
            id='payrollHeaderClient'
            style={inputStyle}
            defaultValue={props.payrollHeaderClient}
          />

          <Form.Input
            label='Invoice Number'
            type='text'
            name='invoicenumber'
            id='payrollHeaderInvoiceNumber'
            style={inputStyle}
            defaultValue={props.payrollHeaderInvoiceNumber}
          />
        </Form>
      </div>
      <div>
        <button
          type='button'
          onClick={props.setTitleValue}
          style={{
            color: '#999', background: 'none', border: 'none', outline: 'none',
          }}
        >
          debug: set title
        </button>
      </div>
      <div>
        <button
          type='button'
          onClick={props.getHeaderTabData}
          style={{
            color: '#999', background: 'none', border: 'none', outline: 'none',
          }}
        >
          debug: call API
        </button>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTab);
