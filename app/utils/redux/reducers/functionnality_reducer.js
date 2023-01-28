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
   changePassword,
} from '../actions/action_creators';
import { Platform } from 'react-native';

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
   apps_checked: [],
   all_apps_in_phone: [
      {
         id: 1,
         nom: 'Chrome',
         icone: require('_images/chrome.png'),
         url: 'https://www.google.com/',
      },
      {
         id: 2,
         nom: 'Instagram',
         icone: require('_images/instagram.png'),
         url: 'https://www.instagram.com/instagram',
      },
      {
         id: 3,
         nom: 'Mail',
         icone: require('_images/mail.png'),
         url: 'mailto:amada.rktvo@gmail.com?subject=testing&body=Test Mail',
      },
      {
         id: 4,
         nom: 'Maps',
         icone: require('_images/maps.png'),
         url: 'https://www.google.com/maps/',
      },
      {
         id: 5,
         nom: 'Setting',
         icone: require('_images/setting.png'),
         url: 'openSettings()',
      },
      {
         id: 6,
         nom: 'Sms',
         icone: require('_images/sms.png'),
         url: `sms:+261345648425${
            Platform.OS === 'ios' ? '&' : '?'
         }body=testMessage`,
      },
      {
         id: 7,
         nom: 'Youtube',
         icone: require('_images/youtube.png'),
         url: 'https://www.youtube.com',
      },
      {
         id: 8,
         nom: 'Watsapp',
         icone: require('_images/watsapp.png'),
         url: 'whatsapp://send?phone=+261345648425&text=TestWatsapp',
      },
      {
         id: 9,
         nom: 'Facebook',
         icone: require('_images/facebook.png'),
         url: 'https://www.facebook.com',
      },
      {
         id: 10,
         nom: 'Call',
         icone: require('_images/call.png'),
         url: 'tel:+261345648425',
      },
      {
         id: 11,
         nom: 'Pikachu',
         icone: require('_images/game.png'),
         url: '',
      },
   ],
   password: '1404',
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
      case changePassword().type:
         return produce(state, (draft) => {
            draft.password = action.payload;
         });
      default:
         return state;
   }
};
