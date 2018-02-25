import { connect } from 'react-redux';
import React from 'react';

import BaseContainer from '../../shared/base-container';
import { fetchContacts, login } from './actions';
import { areContactsLoading } from '../../shared/app/loading/selectors';
import { getContacts } from './selectors';

import LoadingScreen from '../../shared/app/loading/';
import ContactsList from './ContactsList';

const mapStateToProps = state => ({
  contacts: getContacts(state),
  loading: areContactsLoading(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchContacts: () => dispatch(fetchContacts(props.navigator)),
  loginWithRegCode: (ethWalletAddress, userID, regCode) => dispatch(login(props.navigator, ethWalletAddress, userID, regCode)),
});

class ContactScreenContainer extends BaseContainer {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, loading, loginWithRegCode } = this.props;
    console.log('Contacts are ', contacts);
    if (loading) {
      return <LoadingScreen />;
    }
    return <ContactsList contacts={contacts} login={loginWithRegCode}/>;
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  ContactScreenContainer
);

export default reduxContainer;
