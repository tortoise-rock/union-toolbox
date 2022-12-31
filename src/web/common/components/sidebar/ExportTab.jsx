import React from 'react';
import { connect } from 'react-redux';
import {
  Button, Divider, Form, Header, Message
} from 'semantic-ui-react';

const mapStateToProps = (state) => ({
  assignee: state.payroll.payrollExportAssignee,
  priority: state.payroll.payrollExportPriority,
});

const mapDispatchToProps = () => ({});

function ExportTab(props) {
  return (
    <div className='ui bottom attached active tab segment' data-tab='export'>
      <Form>
        <Divider horizontal>
          <Header size='small' content='Validation' className='utbx-uppercase' />
        </Divider>

        <div className='fields'>
          <div className='eight wide field'>
            <div className='ui fitted horizontal divider' style={{ fontSize: '80%' }}>Detected</div>
          </div>
          <div className='eight wide field'>
            <div className='ui fitted horizontal divider' style={{ fontSize: '80%' }}>Calculated</div>
          </div>
        </div>

        <Form.Field>
          <label>Pay Total</label>
          <Form.Group>
            <Form.Field width={8}>
              <input
                type='text'
                name='payable-detected'
                readOnly=''
                value='$4282.00'
                className='utbx-bg-green'
              />
            </Form.Field>
            <Form.Field width={8}>
              <input
                type='text'
                name='payable-calculated'
                readOnly=''
                value='$4282.00'
                className='utbx-bg-green'
              />
            </Form.Field>
          </Form.Group>
        </Form.Field>

        <Form.Field>
          <label>Contributions</label>
          <Form.Group>
            <Form.Field width={8}>
              <input
                type='text'
                name='contributions-detected'
                readOnly=''
                value='$342.00'
                className='utbx-bg-yellow'
              />
            </Form.Field>
            <Form.Field width={8}>
              <input
                type='text'
                name='contributions-calculated'
                readOnly=''
                value='$285.00'
                className='utbx-bg-yellow'
              />
            </Form.Field>
          </Form.Group>
        </Form.Field>

        <Form.Field>
          <label>Member Count</label>
          <Form.Group>
            <Form.Field width={8}>
              <input
                type='text'
                name='members-detected'
                readOnly=''
                value='28'
                className='utbx-bg-green'
              />
            </Form.Field>
            <Form.Field width={8}>
              <input
                type='text'
                name='members-calculated'
                readOnly=''
                value='28'
                className='utbx-bg-green'
              />
            </Form.Field>
          </Form.Group>
        </Form.Field>

        <Divider hidden />

        <Divider horizontal>
          <Header size='small' content='Resolve' className='utbx-uppercase' />
        </Divider>

        <Form.Group widths='equal'>
          <Form.Select label='Assignee' options={props.assignee} placeholder='Select Assignee' />
          <Form.Select label='Priority' options={props.priority} defaultValue='standard' />
        </Form.Group>

        <Form.Input
          label='Summary'
          type='text'
          name='summary'
          id='payrollExportSummary'
        />

        <Form.TextArea
          label='Description'
          type='text'
          name='description'
          id='payrollExportDescription'
          rows={3}
        />

        <Button>Create Ticket</Button>

        <Divider hidden />

        <Divider horizontal>
          <Header size='small' content='Options' className='utbx-uppercase' />
        </Divider>

        <Message
          color='yellow'
          header='Warning'
          content='Contributions - Mismatch between detected and calculated amounts'
        />

        <Button primary>Mark as Completed</Button>
        <Button>Save Draft</Button>
      </Form>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ExportTab);
