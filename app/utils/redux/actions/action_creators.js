import {
   ADD_ACCOUNT,
   ACCOUNT_PICKED,
   GET_STARTED,
   REMOVE_ACCOUNT,
   EDIT_ACCOUNT,
   CHANGE_LANGUAGE,
   ACTIVE_DEACTIVE_TOUCH_BACK,
   ADD_APPS_TO_CHECKED,
} from './action_names';

export const getStarted = () => ({
   type: GET_STARTED,
});

export const activeDeactiveTouchBack = () => ({
   type: ACTIVE_DEACTIVE_TOUCH_BACK,
});

export const changeLanguage = (langue) => ({
   type: CHANGE_LANGUAGE,
   payload: langue,
});

export const accountPick = (compte) => ({
   type: ACCOUNT_PICKED,
   payload: compte,
});

export const deleteAccount = (id) => ({
   type: REMOVE_ACCOUNT,
   payload: id,
});

export const editAccount = (compte) => ({
   type: EDIT_ACCOUNT,
   payload: compte,
});

export const addAccount = (compte) => ({
   type: ADD_ACCOUNT,
   payload: compte,
});

export const addCheckedApps = (apps) => ({
   type: ADD_APPS_TO_CHECKED,
   payload: apps,
});
