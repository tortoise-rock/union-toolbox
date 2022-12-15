import * as types from '../constants/actionTypes';

const initialState = {
  payrollHeaderEmployer: 'Employer Name',
  payrollHeaderTitle: '',
  payrollHeaderClient: 'Client name',
  payrollHeaderInvoiceNumber: '103449',
};

const payrollReducer = (state = initialState, action) => {
  console.log('payrollReducer called');
  console.log('action.type is', action.type);
  console.log('action.payload is', action.payload);
  // console.log('state:');
  // console.log(state);

  switch (action.type) {
    case types.SET_TITLE:
      console.log('SET_TITLE called');
      return Object.assign({}, state, {
        payrollHeaderTitle: action.payload,
      });

    default: {
      console.log('DEFAULT called');
      return state;
    }
  }
};

export default payrollReducer;
