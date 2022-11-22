import { combineReducers } from 'redux';
import testValueReducer from '../reducers/testValueReducer';

const rootReducer = combineReducers({
  testValue: testValueReducer,
});

export default rootReducer;
