import React from 'react';

function Header() {
  return (
    <div id='header'>
      <div id='sub-header' className='ui fixed top sticky fluid container'>
        {/* LEFT */}
        {/* END LEFT */}
        {/* CENTER */}
        <div className='ui menu secondary'>
          <a className='item' href='#todo'>
            <i className='layer group icon' />
            <span className='tool-name'>PAYROLL</span>
          </a>
          <a className='item' href='#todo'>
            Dashboard
          </a>
          <div className='ui dropdown item'>
            Tools
            <i className='dropdown icon' />
            <div className='menu'>
              <a className='item' href='#todo'>
                Member Lookup
              </a>
            </div>
          </div>
          <div className='item'>
            <a className='ui button primary' href='#todo'>
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
                    <i className='search icon' />
                  </div>
                  <div className='results' />
                </div>
              </form>
              <a href='#todo' className='ui item'>
                <i className='cog icon' />
              </a>
              <a href='#todo' className='ui item'>
                <i className='circular user icon' />
              </a>
            </div>
            {/* END RIGHT */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
