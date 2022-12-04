import React from 'react';

function Content() {
  return (
    <div className='ten wide column utbx-fitted-max'>
      <div className='ui top attached menu utbx-sticky'>
        <div className='ui icon item'>
          <i className='mouse pointer icon' />
        </div>
        <div className='ui icon item'>
          <i className='search icon' />
        </div>
        <div className='ui icon item'>
          <i className='search plus icon' />
        </div>
        <div className='right menu'>
          <div className='ui right aligned category search item'>
            <div className='ui transparent icon input'>
              <input
                className='prompt'
                type='text'
                placeholder='Search text...'
              />
              <i className='search link icon' />
            </div>
            <div className='results' />
          </div>
          <div className='ui dropdown item'>
            <i className='bars icon' />
            Page
            <i className='dropdown icon' />
            <div className='menu'>
              {/* TODO page number logic */}
              <a className='item' href='#todo'>
                Page 1
              </a>
              {/* end page number logic %} */}
            </div>
          </div>
        </div>
      </div>
      <div className='utbx-scanned-docs'>
        {/* TODO page artifact logic */}
        <div
          className='ui fluid utbx-scanned-doc'
          id='utbx-scanned-doc-page-TODO'
        >
          <img
            className='ui fluid image'
            alt='page1'
            src='/assets/examples/example1.png'
          />
        </div>
        {/* end page artifact logic */}
      </div>
    </div>
  );
}

export default Content;
