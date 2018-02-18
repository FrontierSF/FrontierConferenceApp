import { connect } from 'react-redux';
import React from 'react';
import { View, Text, Image } from 'react-native';

import BaseContainer from '../../shared/base-container';
import fetchContacts from './actions';
import { areContactsLoading } from '../../shared/app/loading/selectors';
// import { getCoins } from './selectors';

import LoadingScreen from '../../shared/app/loading/';
// import Coins from './component';

const mapStateToProps = state => ({
  // coins: getCoins(state),
  loading: areContactsLoading(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchContacts: () => dispatch(fetchContacts(props.navigator)),
});

class ContactScreenContainer extends BaseContainer {
  componentDidMount() {
    this.props.fetchContacts();
  }

  // render() {
  //   const { coins, loading } = this.props;
  //   if (loading) {
  //     return <LoadingScreen />;
  //   }
  //   return <Coins coins={coins} />;
  // }

  render() {
    return (
      <View>
      <Text>Coins Go here</Text>
      </View>
    )
  }

}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  ContactScreenContainer
);

export default reduxContainer;
