import React from 'react';

function Header() {
  return (
    <div id='header'>
      <div id='sub-header' className='ui fixed top sticky fluid container' style={{ padding: '6px 0' }}>
        {/* LEFT */}
        {/* END LEFT */}
        {/* CENTER */}
        <div className='ui menu secondary'>
          <a className='ui item' href='#todo'>
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
              <a className='ui item' href='#todo'>
                Member Lookup
              </a>
            </div>
          </div>
          <div className='ui item'>
            <a className='ui button primary' href='#todo'>
              Upload
            </a>
          </div>
          {/* END CENTER */}
          {/* RIGHT */}
          <div className='right menu'>
            <div className='ui item' style={{ padding: 0 }}>
              <form className='ui form' style={{ margin: 0, padding: '0px 8px' }}>
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
              <a href='#todo' className='ui item' style={{ margin: 0, padding: '0px 8px' }}>
                <i className='cog icon' />
              </a>
              <a href='#todo' className='ui item' style={{ margin: 0, padding: '0px 8px' }}>
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
