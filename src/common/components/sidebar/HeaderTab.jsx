import React from 'react';
import { connect } from 'react-redux';
import { setTitleActionCreator } from '../../../app/actions';

const mapStateToProps = (state) => ({
  payrollHeaderEmployer: state.payroll.payrollHeaderEmployer,
  payrollHeaderTitle: state.payroll.payrollHeaderTitle,
  payrollHeaderClient: state.payroll.payrollHeaderClient,
  payrollHeaderInvoiceNumber: state.payroll.payrollHeaderInvoiceNumber,
});

const mapDispatchToProps = (dispatch) => ({
  setTitleValue: () => dispatch(setTitleActionCreator('Title of event')),
});

const inputStyle = {
  fontFamily: 'monospace',
  color: '#616161',
};

function HeaderTab(props) {
  return (
    <>
      <div className='ui bottom attached active tab segment' data-tab='header'>
        <form className='ui form'>
          <div className='ui horizontal divider'>Form</div>
          <div className='field'>
            <label>Entity</label>
            <div className='fields'>
              <div className='sixteen wide field'>
                <select className='ui search dropdown'>
                  <option value=''>Bode Inc</option>
                  <option value=''>Hammes PLC2</option>
                  <option value=''>Nolan-Kirlin</option>
                  <option value=''>Perstrom Ltd</option>
                </select>
              </div>
            </div>
          </div>
          <div className='field'>
            <div className='fields'>
              <div className='twelve wide field'>
                <label>Form</label>
                <select className='ui search dropdown'>
                  <option value=''>Consectetur Adipiscing Elit</option>
                  <option value=''>Convallis Vulputate</option>
                  <option value=''>Efficitur Erat</option>
                  <option value=''>Est Non Eleifend</option>
                  <option value=''>Facilisis Velit Felis</option>
                  <option value=''>Neque Dictum Varius</option>
                  <option value=''>Urna Et Quam Tempor</option>
                  <option value=''>Vestibulum Bibendum Condimentum</option>
                  <option value=''>Vestibulum Risus</option>
                </select>
              </div>
              <div className='four wide field'>
                <label>Version</label>
                <select className='ui search dropdown'>
                  <option value=''>Latest</option>
                  <option value=''>Pre-2019</option>
                </select>
              </div>
            </div>
          </div>
          <button className='ui primary button'>Apply</button>
          <button className='ui button'>Detect</button>
          <div className='ui horizontal divider'>Header</div>
          <div className='field'>
            <label>Employer</label>
            <div className='sixteen wide field'>
              <input
                type='text'
                name='employer'
                id='payrollHeaderEmployer'
                style={inputStyle}
                defaultValue={props.payrollHeaderEmployer}
              />
            </div>
          </div>
          <div className='field'>
            <label>Title</label>
            <div className='sixteen wide field'>
              <input
                type='text'
                name='title'
                id='payrollHeaderTitle'
                style={inputStyle}
                defaultValue={props.payrollHeaderTitle}
              />
            </div>
          </div>
          <div className='field'>
            <label>Client</label>
            <div className='sixteen wide field'>
              <input
                type='text'
                name='client'
                id='payrollHeaderClient'
                style={inputStyle}
                defaultValue={props.payrollHeaderClient}
              />
            </div>
          </div>
          <div className='field'>
            <label>Invoice Number</label>
            <div className='sixteen wide field'>
              <input
                type='text'
                name='invoicenumber'
                id='payrollHeaderInvoiceNumber'
                style={inputStyle}
                defaultValue={props.payrollHeaderInvoiceNumber}
              />
            </div>
          </div>
        </form>
      </div>
      <a onClick={props.setTitleValue} style={{ color: '#999' }}>
        demo
      </a>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTab);
