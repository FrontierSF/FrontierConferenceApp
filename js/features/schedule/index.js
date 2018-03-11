import { connect } from 'react-redux';
import React from 'react';

import BaseContainer from '../../shared/base-container'

import Schedule from './component';
import selectTalk from '../talk-detail-screen/actions'
import { AppConfig } from '../../themes'
const data = require('./schedule.json')

const firstDay = new Date(AppConfig.conferenceDates[0])
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
    setSelectedTalk: talk => dispatch(selectTalk(talk)),
});

class ScheduleContainer extends BaseContainer {
  render() {
    console.log('The function is defined ', selectTalk);
    return <Schedule {...this.props} />;
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  ScheduleContainer
);

export default reduxContainer;
