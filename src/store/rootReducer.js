import { combineReducers } from 'redux';
import operations from '../components/Home/reducer';

const appReducer = combineReducers({
    operations,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
