/**
 * Reducers/store to maintain all loading states
 */

import t from './actionTypes';

const defaultState = {
  login: false,
  contacts: false,
};

const loading = (state = defaultState, action) => {
  switch (action.type) {
    case t.LOGIN_LOADING:
      return Object.assign({}, state, {
        login: true,
      });

    case t.LOGIN_LOADED:
      return Object.assign({}, state, {
        login: false,
      });

    case t.CONTACTS_LOADING:
      return Object.assign({}, state, {
        contacts: true,
      });

    case t.CONTACTS_LOADED:
      return Object.assign({}, state, {
        contacts: false,
      });
    default:
      return state;
  }
};

export default loading;
