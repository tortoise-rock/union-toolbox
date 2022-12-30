import { v4 as uuidv4 } from 'uuid';
import * as types from '../constants/actionTypes';

const employerOptions = [
  { key: uuidv4(), text: 'Bode Inc', value: 'a1' },
  { key: uuidv4(), text: 'Hammes PLC2', value: 'a2' },
];

const formOptions = [
  { key: uuidv4(), text: 'Consectetur Adipiscing Elit', value: 'b1' },
  { key: uuidv4(), text: 'Convallis Vulputate', value: 'b2' },
];

const versionOptions = [
  { key: uuidv4(), text: 'Latest', value: 'c1' },
  { key: uuidv4(), text: 'Pre-2019', value: 'c2' },
];

const initialState = {
  payrollHeaderEmployer: employerOptions,
  payrollHeaderForm: formOptions,
  payrollHeaderVersion: versionOptions,
  payrollHeaderTitle: '',
  payrollHeaderClient: 'Client name',
  payrollHeaderInvoiceNumber: '103449',
};

// eslint-disable-next-line default-param-last
const payrollReducer = (state = initialState, action) => {
  console.log('payrollReducer called');
  console.log('action.type is', action.type);
  console.log('action.payload is', action.payload);
  // console.log('state:');
  // console.log(state);

  switch (action.type) {
    case types.SET_TITLE:
      console.log('SET_TITLE called');
      return { ...state, payrollHeaderTitle: action.payload };

    case types.SET_HEADER_TAB_BEGIN:
      console.log('SET_HEADER_TAB_BEGIN called');
      return state;

    case types.SET_HEADER_TAB_SUCCESS:
      console.log('SET_HEADER_TAB_SUCCESS called');
      return state;

    case types.SET_HEADER_TAB_FAILURE:
      console.log('SET_HEADER_TAB_FAILURE called');
      return state;

    default: {
      console.log('DEFAULT called');
      return state;
    }
  }
};

export default payrollReducer;
