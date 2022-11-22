import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className='ten wide column utbx-fitted-max'>
          <div className='ui top attached menu utbx-sticky'>
            <div className='ui icon item'>
              <i className='mouse pointer icon'></i>
            </div>
            <div className='ui icon item'>
              <i className='search icon'></i>
            </div>
            <div className='ui icon item'>
              <i className='search plus icon'></i>
            </div>
            <div className='right menu'>
              <div className='ui right aligned category search item'>
                <div className='ui transparent icon input'>
                  <input
                    className='prompt'
                    type='text'
                    placeholder='Search text...'
                  />
                  <i className='search link icon'></i>
                </div>
                <div className='results'></div>
              </div>
              <div className='ui dropdown item'>
                <i className='bars icon'></i>
                Page <i className='dropdown icon'></i>
                <div className='menu'>
                  {/* TODO page number logic */}
                  <a className='item'>Page 1</a>
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
                src='/assets/examples/example1.png'
              />
            </div>
            {/* end page artifact logic */}
          </div>
        </div>
      </>
    );
  }
}

export default Content;
