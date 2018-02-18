import React from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import OrangeGradient from './OrangeGradient'
import Talk from './Talk'
import PropTypes from 'prop-types';

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

class Schedule extends React.Component {
  renderItem = ({item}) => {
    const isCurrentDay = false
    // const { isCurrentDay } = this.state
    const { currentTime, setReminder, removeReminder } = this.props
    const { eventDuration, eventStart, eventEnd, eventFinal, special } = item
    const isActive = false//isWithinRange(currentTime, eventStart, eventEnd)
    const isFinished = true//currentTime > eventEnd
    //if (item.type === 'talk') {
    return (
      <Talk
        type={item.type}
        name={item.speaker}
        avatarURL={`https://infinite.red/images/chainreact2017/${item.image}.png`}
        title={item.title}
        start={eventStart}
        duration={eventDuration}
        onPress={() => {} }
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
    const { data } = this.props;
    return (
      <OrangeGradient style={style.linearGradient}>
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
