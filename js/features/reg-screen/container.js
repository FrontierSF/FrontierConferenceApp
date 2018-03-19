import { connect } from 'react-redux';

import React from 'react';
import BaseContainer from '../../shared/base-container'
import { initializeApp } from '../../shared/app/actions';
import { navTypes } from '../../shared/const';
import { login, loginLocally, generateWallet } from '../crypto-screen/actions';
import RegScreen from './component';

const regCodes = require('./regCodes.json')

//export function loginLocally(status) {
// I probably need to add another state to indicate if the user is authenticated.

//state.crypto; //loggedIn
const mapStateToProps = state => ({
  locallyLoggedIn: state.crypto.locallyLoggedIn,
  user: state.crypto.user,
  wallet: state.crypto.wallet
});

const mapDispatchToProps = dispatch => ({
  goToTabs: () => dispatch(initializeApp(navTypes.tab)),
  generateWallet: () => dispatch(generateWallet()),
  loginLocally: (user) => dispatch(loginLocally(user)),
  loginWithRegCode: (userID, regCode) => dispatch(login(props.navigator, props.wallet, userID, regCode)),
});

class RegScreenContainer extends BaseContainer {

  componentDidMount() {
    const { wallet, generateWallet, locallyLoggedIn, goToTabs } = this.props;
    if (wallet === '') {
      generateWallet()
    }
    if (locallyLoggedIn) {
      // TODO: Add code to base container that logs user in remotely
      goToTabs()
    }
  }
  regCodeIsValid = (regCode) => {
    return regCode in regCodes
  };

  loginLocally = (regCode) => {
    if (!regCode in regCodes) {
      return
    }
    const user = regCodes[regCode]
    // attempt to login with wallet and user Code
    //TODO: wire up this section
    // this.props.loginWithRegCode(regCode, user)
    this.props.loginLocally(user)
  }

  goToTabs = () => {
    this.props.goToTabs();
  };
  render() {
    return (
      <RegScreen
        name={this.props.name}
        login={this.loginLocally}
        regCodeIsValid={this.regCodeIsValid}
        goToTab={this.goToTabs}
      />
    );
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  RegScreenContainer
);

export default reduxContainer;
