import showErrorMessage from '../../shared/error/actions';
import { cyptoAPIBaseURL } from '../../shared/const';
import { contactsLoading, contactsLoaded } from '../../shared/app/loading/actions';
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
export default function fetchContacts(navigator) {
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
