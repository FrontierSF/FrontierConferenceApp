/**
 * Add actions for different loading states
 */

import t from './actionTypes';

export function loginLoading() {
  return {
    type: t.LOGIN_LOADING,
  };
}

export function loginLoaded() {
  return {
    type: t.LOGIN_LOADED,
  };
}

export function contactsLoading() {
  return {
    type: t.CONTACTS_LOADING,
  };
}

export function contactsLoaded() {
  return {
    type: t.CONTACTS_LOADED,
  };
}
