import * as types from '../constants/actionTypes';

const initialState = {
  testValue: 0,
};

const testValueReducer = (state = initialState, action) => {
  console.log('Called marketsReducer()');
  console.log('action.type is', action.type);

  switch (action.type) {
    case types.SET_TEST_VALUE:
      console.log('SET_TEST_VALUE called');
      return state;
    default: {
      console.log('default called');
      return state;
    }
  }
};

export default testValueReducer;
