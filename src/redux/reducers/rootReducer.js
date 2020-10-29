import { combineReducers } from 'redux';
import footballReducer from './footballReducer'
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
football: footballReducer,
filter: filterReducer
});

export default rootReducer;