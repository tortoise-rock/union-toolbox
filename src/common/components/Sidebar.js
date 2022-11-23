import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTitleActionCreator } from '../../app/actions';

const mapStateToProps = (state) => ({
  payrollHeaderEmployer: state.payroll.payrollHeaderEmployer,
  payrollHeaderTitle: state.payroll.payrollHeaderTitle,
  payrollHeaderClient: state.payroll.payrollHeaderClient,
  payrollHeaderInvoiceNumber: state.payroll.payrollHeaderInvoiceNumber,
});

const mapDispatchToProps = (dispatch) => ({
  setTitleValue: () =>
    dispatch(
      // setTestValueActionCreator(document.querySelector('#input-data').value)
      setTitleActionCreator('Title of event')
    ),
});

const inputStyle = {
  fontFamily: 'monospace',
  color: '#616161',
};

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className='six wide column utbx-fitted-max'>
          <div className='ui top attached tabular menu utbx-sticky utbx-menu-bg-overide'>
            <a className='active item' data-tab='header'>
              <i className='wpforms icon'></i>Header
            </a>
            <a className='item' data-tab='members'>
              <i className='users icon'></i>Members
            </a>
            <a className='item' data-tab='export'>
              <i className='download icon'></i>Export
            </a>
            <a className='item' data-tab='settings'>
              <i className='cogs icon'></i>Settings
            </a>
          </div>
          <div
            className='ui bottom attached active tab segment'
            data-tab='header'
          >
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
                    defaultValue={this.props.payrollHeaderEmployer}
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
                    defaultValue={this.props.payrollHeaderTitle}
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
                    defaultValue={this.props.payrollHeaderClient}
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
                    defaultValue={this.props.payrollHeaderInvoiceNumber}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className='ui bottom attached tab segment' data-tab='members'>
            <form className='ui form'></form>
          </div>
          <div
            className='ui bottom attached tab segment'
            data-tab='export'
          ></div>
          <div className='ui bottom attached tab segment' data-tab='settings'>
            <form className='ui form'>
              <div className='ui horizontal divider'>Global</div>
            </form>
          </div>
          <a onClick={this.props.setTitleValue} style={{ color: '#999' }}>
            demo
          </a>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
