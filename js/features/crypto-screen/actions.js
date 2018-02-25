import showErrorMessage from '../../shared/error/actions';
import { cyptoAPIBaseURL } from '../../shared/const';
import {
  contactsLoading,
  contactsLoaded,
  loginLoading,
  loginLoaded
} from '../../shared/app/loading/actions';
import t from './actionTypes';

/**
 * About to make a request for contacts
 */
function requestContacts() {
  return dispatch => {
    dispatch({
      type: t.REQUEST_CONTACTS,
    });
  };
}

/**
 * About to make a request to login
 */
function requestLogin() {
  return dispatch => {
    dispatch({
      type: t.REQUEST_LOGIN,
    });
  };
}

/**
 * Login using reg code
 */
export function login(navigator, ethWalletAddress, userID, regCode) {
  // Check that input values are valid
  ethWalletAddress = '0x' + ethWalletAddress
  console.log('login kicked off with ', ethWalletAddress, userID, regCode);
  //export const cyptoAPIBaseURL = 'http://165.227.49.49/app/';
  // TODO: remove this and pass in address from above.
  // const ethAddress = '0x7ffc57839b00206d1ad20c69a1981b489f772031'
  const address = `${cyptoAPIBaseURL}login`
  console.log('login address ', address);

  return dispatch => {
    dispatch(requestLogin());
    dispatch(loginLoading());
    fetch(address, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // body:`eth_address=${ethWalletAddress}&user_id=${userID}&registration_code=${regCode}`,
      body: JSON.stringify({
        eth_address: ethWalletAddress,
        user_id: userID,
        registration_code: regCode,
      }),
    })
      .then(response => {
        // Not invalid params returns succes, so need to check for error message
        console.log('Success login!!');
        console.log('returned login payload ', response);
        dispatch(loginLoaded());
        dispatch(updateLogin(true));
      })
      .catch(error => {
        console.log('Failure login');
        console.log('Error returned ', error);
        dispatch(loginLoaded());
        // dispatch(showErrorMessage(error, navigator));
      });
  };
}

/**
 * Store Login status object. clean this up
 */
function updateLogin(status) {
  return dispatch => {
    dispatch({
      type: t.UPDATE_LOGIN,
      status,
    });
  };
}
/**
 * Store contacts object
 */
function updateContacts(contacts) {
  return dispatch => {
    dispatch({
      type: t.UPDATE_CONTACTS,
      contacts,
    });
  };
}

/**
 * fetch contacts from API
 */
export function fetchContacts(navigator) {
  console.log('fetchContacts kicked of');
  // TODO: remove this and pass in address from above.
  const ethAddress = '0x7ffc57839b00206d1ad20c69a1981b489f772031'
  const address = `${cyptoAPIBaseURL}address/${ethAddress}/contacts`
  console.log('Fetching address ', address);
  return dispatch => {
    dispatch(requestContacts());
    dispatch(contactsLoading());
    fetch(address)
      .then(response => response.json())
      .then(responseJson => {
        console.log('Success!!');
        console.log(responseJson);
        dispatch(contactsLoaded());
        dispatch(updateContacts(responseJson));
      })
      .catch(error => {
        console.log('Failure');
        console.log(error);
        dispatch(contactsLoaded());
        dispatch(showErrorMessage(error, navigator));
      });
  };
}
