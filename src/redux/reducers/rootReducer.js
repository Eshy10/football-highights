import { combineReducers } from 'redux';
import footballReducer from './footballReducer'


const rootReducer = combineReducers({
football: footballReducer
});

export default rootReducer;