import { createSelector } from 'reselect';

const getCrypto = state => state.crypto;

export const getContacts = createSelector([getCrypto], crypto => crypto.contacts);
