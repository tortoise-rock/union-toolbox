import React, { Component } from 'react';

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
            <form className='ui form utbxc-value-monospace'>
              <div className='ui horizontal divider'>Form</div>
              <div className='field'>
                <label>Entity</label>
                <div className='fields'>
                  <div className='sixteen wide field'>
                    <select className='ui search dropdown'>
                      <option value=''>Entity 1</option>
                      <option value=''>Entity 2</option>
                      <option value=''>Entity 3</option>
                      <option value=''>Entity 4</option>
                    </select>
                  </div>
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
        </div>
      </>
    );
  }
}

export default Sidebar;
