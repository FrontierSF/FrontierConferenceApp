import { connect } from 'react-redux';

import React from 'react';
import BaseContainer from '../../shared/base-container'
import { initializeApp } from '../../shared/app/actions';
import { navTypes } from '../../shared/const';
import RegScreen from './component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  goToTabs: () => dispatch(initializeApp(navTypes.tab)),
});

class RegScreenContainer extends BaseContainer {
  goToTabs = () => {
    this.props.goToTabs();
  };
  render() {
    return (
      <RegScreen
        name={this.props.name}
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