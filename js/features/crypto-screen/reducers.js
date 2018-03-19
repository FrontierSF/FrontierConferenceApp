/**
 * User reducer
 * It contains all the crypto rela
 * */

import { REHYDRATE } from 'redux-persist/constants';

import t from './actionTypes';

// Default state. It should never change
const defaultState = {
  contacts: [],
  user: {},
  locallyLoggedIn: false,
  loggedIn: false,
  wallet:''
};

const crypto = (state = defaultState, action) => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload && action.payload.coins) {
        return Object.assign({}, action.payload.coins);
      }
      return Object.assign({}, state);

    case t.LOGOUT:
      return Object.assign({}, defaultState);

    case t.UPDATE_CONTACTS:
      console.log('update contacts hit in reducer', action.contacts);
      return Object.assign({}, defaultState, { contacts: action.contacts });
    case t.STORE_WALLET:
      console.log('Store wallet hit with!!! ', action);
      // TODO: this needs to be stored in a sercure place
      return Object.assign({}, defaultState, { wallet: action.wallet });
    case t.UPDATE_LOGIN_LOCAL:
      console.log('update UPDATE_LOGIN_LOCAL hit in reducer with action', action);
      return Object.assign({}, defaultState, { locallyLoggedIn: true, user: action.user });
    case t.UPDATE_LOGIN:
      console.log('update login hit in reducer with action', action);
      return Object.assign({}, defaultState, { loggedIn: true });
    case t.REQUEST_LOGIN:
    case t.REQUEST_CONTACTS:
    default:
      return state;
  }
};

export default crypto;
