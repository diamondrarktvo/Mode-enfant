import { combineReducers } from 'redux';

import { functionnalityReducer } from './functionnality_reducer';

export const reducer = combineReducers({
   fonctionnality: functionnalityReducer,
});
