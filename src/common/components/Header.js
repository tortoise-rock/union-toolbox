import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='header'>
        <div id='sub-header' className='ui fixed top sticky fluid container'>
          {/* LEFT */}
          {/* END LEFT */}
          {/* CENTER */}
          <div className='ui menu secondary'>
            <a className='item' href='#'>
              <i className='layer group icon'></i>
              <span className='tool-name'>PAYROLL</span>
            </a>
            <a className='item' href='#'>
              Dashboard
            </a>
            <div className='ui dropdown item'>
              Tools
              <i className='dropdown icon'></i>
              <div className='menu'>
                <a className='item' href='#'>
                  Member Lookup
                </a>
              </div>
            </div>
            <div className='item'>
              <a className='ui button primary' href='#'>
                Upload
              </a>
            </div>
            {/* END CENTER */}
            {/* RIGHT */}
            <div className='right menu'>
              <div className='item'>
                <form className='ui form'>
                  <div className='ui search'>
                    <div className='ui icon input'>
                      <input
                        className='prompt'
                        name='search'
                        type='text'
                        placeholder='Search'
                      />
                      <i className='search icon'></i>
                    </div>
                    <div className='results'></div>
                  </div>
                </form>
                <a href='#' className='ui item'>
                  <i className='cog icon'></i>
                </a>
                <a href='#' className='ui item'>
                  <i className='circular user icon'></i>
                </a>
              </div>
              {/* END RIGHT */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
