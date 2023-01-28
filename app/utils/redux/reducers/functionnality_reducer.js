import { produce } from 'immer';
import {
   getStarted,
   activeDeactiveTouchBack,
   changeLanguage,
   addAccount,
   accountPick,
   deleteAccount,
   editAccount,
} from '../actions/action_creators';

const initialState = {
   started: false,
   langue: 'fr',
   isTouchBackActive: false,
   accounts: [],
   account_actif: null,
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
      case addAccount().type:
         return produce(state, (draft) => {
            draft.accounts.push(action.payload);
         });
      case accountPick().type:
         return produce(state, (draft) => {
            draft.account_actif = action.payload;
         });
      case deleteAccount().type:
         return produce(state, (draft) => {
            draft.accounts = draft.accounts.filter(
               (account) => account.id !== action.payload
            );
         });
      case editAccount().type:
         const userToModified = action.payload;
         return produce(state, (draft) => {
            let oldValue = draft.accounts.filter(
               (account) => parseInt(account.id) === parseInt(userToModified.id)
            );
            if (oldValue) {
               oldValue[0].nom = userToModified.nom;
               oldValue[0].sexe = userToModified.sexe;
            }
         });
      default:
         return state;
   }
};
