import React from 'react';
import { View, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import OrangeGradient from './OrangeGradient'
import Talk from './Talk'
import pages from '../../navigation/pages'

import PropTypes from 'prop-types';

import DayToggle from './DayToggle'

import {
  compareAsc,
  isSameDay,
  addMinutes,
  isWithinRange,
  subMilliseconds
} from 'date-fns'

import {
  merge,
  groupWith,
  contains,
  assoc,
  map,
  sum,
  findIndex
} from 'ramda'

import style from './style';

import { AppConfig } from '../../themes'

const isActiveCurrentDay = (currentTime, activeDay) =>
  isSameDay(currentTime, new Date(AppConfig.conferenceDates[activeDay]))

const addSpecials = (specialTalksList, talks) =>
  map((talk) => assoc('special', contains(talk.title, specialTalksList), talk), talks)

class Schedule extends React.Component {
  constructor (props) {
    super(props)

    const { schedule, currentTime } = props;//specialTalks,
    const eventsByDay = this.getEventsByDayFromSchedule(schedule)
    const activeDay = 0
    const data = eventsByDay[activeDay]//addSpecials(specialTalks, eventsByDay[activeDay])
    const isCurrentDay = isActiveCurrentDay(currentTime, activeDay)
    // const appState = AppState.currentState

    // TODO now I need to make this based on data
    this.state = { eventsByDay, activeDay, data }//{eventsByDay, data, isCurrentDay, activeDay, appState}
  }

  // Move this up a level or think about this later
  setActiveDay = (activeDay) => {
    const { eventsByDay } = this.state
    const { currentTime, specialTalks } = this.props
    const data = eventsByDay[activeDay]
    const isCurrentDay = isActiveCurrentDay(currentTime, activeDay)

    this.setState({data, activeDay, isCurrentDay}, () => {
      if (isCurrentDay) {
        // Scroll to active
        const index = this.getActiveIndex(data)
        this.refs.scheduleList.scrollToIndex({index, animated: false})
      } else {
        // Scroll to top
        this.refs.scheduleList.scrollToOffset({y: 0, animated: false})
      }
    })
  }

  getEventsByDayFromSchedule = (schedule) => {
    const mergeTimes = (e) => {
      const eventDuration = Number(e.duration)
      const eventStart = new Date(e.time)
      const eventFinal = addMinutes(eventStart, eventDuration)
      // ends 1 millisecond before event
      const eventEnd = subMilliseconds(eventFinal, 1)

      return merge(e, { eventStart, eventEnd, eventDuration, eventFinal })
    }
    const sorted = [...schedule].map(mergeTimes).sort((a, b) => {
      return compareAsc(a.eventStart, b.eventStart)
    })
    return groupWith((a, b) => isSameDay(a.eventStart, b.eventStart), sorted)
  }

  getActiveIndex = (data) => {
    const { currentTime } = this.props
    const foundIndex = findIndex((i) => isWithinRange(currentTime, i.eventStart, i.eventEnd))(data)

    // handle pre-event and overscroll
    if (foundIndex < 0) {
      return 0
    } else if (foundIndex > data.length - 3) {
      return data.length - 3
    } else {
      return foundIndex
    }
  }

  onEventPress = (item) => {
            // onPress={() => { this.props.navigator.push({ screen: pages.DETAILS, title: pages.DETAILS, backButtonTitle: '' })} }
    const { navigator, setSelectedTalk } = this.props
    setSelectedTalk(item)
    navigator.push({ screen: pages.DETAILS, title: pages.DETAILS, backButtonTitle: '' })
    // item.type === 'talk'
    //   ? navigation.navigate('TalkDetail')
    //   : navigation.navigate('BreakDetail')
  }
  renderItem = ({item}) => {
    const isCurrentDay = false
    // const { isCurrentDay } = this.state
    const { currentTime, setReminder, removeReminder } = this.props
    const { eventDuration, eventStart, eventEnd, eventFinal, special } = item
    const isActive = isWithinRange(currentTime, eventStart, eventEnd)
    const isFinished = currentTime > eventEnd
    //if (item.type === 'talk') {
    return (
      <Talk
        type={item.type}
        name={item.speaker}
        avatarURL={`https://infinite.red/images/chainreact2017/${item.image}.png`}
        title={item.title}
        start={eventStart}
        duration={eventDuration}
        onPress={() => this.onEventPress(item)}
        onPressTwitter={() => {}}
        onPressGithub={() => {}}
        setReminder={() => {}}
        removeReminder={() => {}}
        currentTime={currentTime}
        isCurrentDay={isCurrentDay}
        isActive={isActive}
        isSpecial={special}
        isFinished={isFinished}
        showWhenFinished
      />
    )
  }

  getItemLayout = (data, index) => {
    const item = data[index]
    const itemLength = (item, index) => {
      if (item.type === 'talk') {
        // use best guess for variable height rows
        return 138 + (1.002936 * item.title.length + 6.77378)
      } else {
        return 145
      }
    }
    const length = itemLength(item)
    const offset = sum(data.slice(0, index).map(itemLength))
    return { length, offset, index }
  }

  render() {
    const { activeDay, data } = this.state;
    const { schedule } = this.props;
    return (
      <OrangeGradient style={style.linearGradient}>
        <DayToggle
          activeDay={activeDay}
          onPressIn={this.setActiveDay}
          />
        <FlatList
          ref='scheduleList'
          data={data}
          extraData={this.props}
          renderItem={this.renderItem}
          keyExtractor={(item, idx) => item.eventStart}
          contentContainerStyle={style.listContent}
          getItemLayout={this.getItemLayout}
          showsVerticalScrollIndicator={false}
        />
      </OrangeGradient>
    );
  }
}

export default Schedule;
