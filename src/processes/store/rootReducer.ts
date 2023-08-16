import uiReducer from 'shared/ui/uiSlice';

import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  ui: uiReducer,
});

export default rootReducer;
