import { connect } from 'react-redux';
import React from 'react';

import BaseContainer from '../../shared/base-container'

import Schedule from './component';

const data = require('./schedule.json')

const mapStateToProps = state => ({
  data: data.schedule
});

const mapDispatchToProps = dispatch => ({
});

class ScheduleContainer extends BaseContainer {
  render() {
    return <Schedule {...this.props} />;
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  ScheduleContainer
);

export default reduxContainer;
