import { combineReducers } from 'redux';
import instances from 'remotedev-app/lib/reducers/instances';
import monitor from 'remotedev-app/lib/reducers/monitor';
import notification from 'remotedev-app/lib/reducers/notification';
import test from 'remotedev-app/lib/reducers/test';
import mock from 'remotedev-app/lib/reducers/mock';

import setting from './setting';
import debuggerReducer from './debugger';

export default combineReducers({
  instances,
  monitor,
  notification,
  test,
  setting,
  debugger: debuggerReducer,
  mock,
});
