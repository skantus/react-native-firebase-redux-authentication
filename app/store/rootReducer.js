import { combineReducers } from 'redux';

import routesReducer from '../reducers/routes/routesReducer';
import counterReducer from '../reducers/counter/counterReducer';
import sessionReducer from '../reducers/session/sessionReducer';
import todolistReducer from '../reducers/todolist/todolistReducer';

export default combineReducers({
  routesReducer,
  counterReducer,
  sessionReducer,
  todolistReducer
});
