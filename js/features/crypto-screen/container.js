import { connect } from 'react-redux';
import React from 'react';

import BaseContainer from '../../shared/base-container';
import fetchContacts from './actions';
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
});

class ContactScreenContainer extends BaseContainer {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, loading } = this.props;
    console.log('Contacts are ', contacts);
    if (loading) {
      return <LoadingScreen />;
    }
    return <ContactsList contacts={contacts} />;
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  ContactScreenContainer
);

export default reduxContainer;
