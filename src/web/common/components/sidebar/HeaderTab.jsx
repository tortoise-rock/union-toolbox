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
  employer: state.payroll.payrollHeaderEmployer,
  form: state.payroll.payrollHeaderForm,
  version: state.payroll.payrollHeaderVersion,
  title: state.payroll.payrollHeaderTitle,
  client: state.payroll.payrollHeaderClient,
  invoiceNumber: state.payroll.payrollHeaderInvoiceNumber,
});

const mapDispatchToProps = (dispatch) => ({
  setTitleValue: () => dispatch(setTitleActionCreator('Title of event')),
  getHeaderTabData: () => dispatch(getHeaderTabDataActionCreator()),
});

function HeaderTab(props) {
  return (
    <>
      <div className='ui bottom attached active tab segment' data-tab='header'>
        <Form>
          <Divider horizontal>
            <Header size='small' content='Form' className='utbx-uppercase' />
          </Divider>

          <Form.Select label='Employer' options={props.employer} placeholder='Select Employer' />

          <Form.Group>
            <Form.Select label='Form' options={props.form} placeholder='Select Form' width={8} />
            <Form.Select label='Version' options={props.version} placeholder='Select Version' width={8} />
          </Form.Group>

          <Button primary>Apply</Button>
          <Button>Detect</Button>

          <Divider horizontal>
            <Header size='small' content='Header' className='utbx-uppercase' />
          </Divider>

          <Form.Field>
            <label>Title</label>
            <input
              type='text'
              name='title'
              id='payrollHeaderTitle'
              className='utbx-mono'
              defaultValue={props.title}
            />
          </Form.Field>

          <Form.Field>
            <label>Client</label>
            <input
              type='text'
              name='client'
              id='payrollHeaderClient'
              className='utbx-mono'
              defaultValue={props.client}
            />
          </Form.Field>

          <Form.Field>
            <label>Invoice Number</label>
            <input
              type='text'
              name='invoicenumber'
              id='payrollHeaderInvoiceNumber'
              className='utbx-mono'
              defaultValue={props.invoiceNumber}
            />
          </Form.Field>

          <Form.Field width={8}>
            <label>Date of Event</label>
            <input
              type='date'
              name='dateOfEvent'
              id='payrollHeaderDateOfEvent'
              className='utbx-mono'
              // defaultValue={props.dateOfEvent}
            />
          </Form.Field>
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
