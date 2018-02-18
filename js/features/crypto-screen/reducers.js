/**
 * User reducer
 * It contains all the crypto rela
 * */

import { REHYDRATE } from 'redux-persist/constants';

import t from './actionTypes';

// Default state. It should never change
const defaultState = {
  contacts: [],
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

    case t.REQUEST_CONTACTS:
    default:
      return state;
  }
};

export default crypto;
