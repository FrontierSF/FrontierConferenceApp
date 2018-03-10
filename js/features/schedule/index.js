import { connect } from 'react-redux';
import React from 'react';

import BaseContainer from '../../shared/base-container'

import Schedule from './component';

const data = require('./schedule.json')

//AppConfig.js'
const Config = {
  // font scaling override - RN default is on
  allowTextFontScaling: false,
  // Dates of the conference
  conferenceDates: ['7/10/2017', '7/11/2017']
}

const firstDay = new Date(Config.conferenceDates[0])
let initialTime = new Date()
initialTime.setFullYear(firstDay.getFullYear())
initialTime.setMonth(firstDay.getMonth())
initialTime.setDate(firstDay.getDate())

const mapStateToProps = state => ({
  schedule: data.schedule,
  currentTime: initialTime//new Date(state.schedule.currentTime),
  // specialTalks: state.notifications.specialTalks
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
