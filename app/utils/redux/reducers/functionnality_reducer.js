import { produce } from 'immer';
import {
   getStarted,
   activeDeactiveTouchBack,
   changeLanguage,
} from '../actions/action_creators';

const initialState = {
   started: false,
   langue: 'fr',
   isTouchBackActive: false,
};

export const functionnalityReducer = (state = initialState, action) => {
   switch (action.type) {
      case getStarted().type:
         return produce(state, (draft) => {
            draft.started = !draft.started;
         });
      case changeLanguage().type:
         return produce(state, (draft) => {
            draft.langue = action.payload;
         });
      case activeDeactiveTouchBack().type:
         return produce(state, (draft) => {
            draft.isTouchBackActive = !draft.isTouchBackActive;
         });
      default:
         return state;
   }
};
