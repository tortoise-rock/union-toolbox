import { combineReducers } from 'redux';
import payrollReducer from '../reducers/payrollReducer';

const rootReducer = combineReducers({
  payroll: payrollReducer,
});

export default rootReducer;
