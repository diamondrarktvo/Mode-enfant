import { produce } from 'immer';
import {
   getStarted,
   activeDeactiveTouchBack,
   changeLanguage,
   addAccount,
   accountPick,
   deleteAccount,
   editAccount,
   addCheckedApps,
} from '../actions/action_creators';

const initialState = {
   started: false,
   langue: 'fr',
   isTouchBackActive: false,
   accounts: [
      {
         id: 1,
         nom: 'test',
         sexe: 'garcon',
      },
   ],
   account_actif: null,
   apps_checked: [1, 2],
   all_apps_in_phone: [
      {
         id: 1,
         nom: 'Chrome',
         icone: require('_images/chrome.png'),
      },
      {
         id: 2,
         nom: 'Twitter',
         icone: require('_images/twitter.png'),
      },
      {
         id: 3,
         nom: 'Pikachu',
         icone: require('_images/game.png'),
      },
   ],
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
      case addCheckedApps().type:
         return produce(state, (draft) => {
            draft.apps_checked = [...action.payload];
         });
      default:
         return state;
   }
};
