import { combineReducers } from 'redux';

// import all reducers here
import dataReducer from './dataReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  data: dataReducer,
});

// make the combined reducers available for import
export default reducers;
