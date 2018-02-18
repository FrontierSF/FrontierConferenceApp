import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableWithoutFeedback, LayoutAnimation, Animated } from 'react-native'
import TalkInfo from './TalkInfo'
// import TimeIndicator from './TimeIndicator'
import styles from './TalkStyle'
// import PushNotification from 'react-native-push-notification'
// import PNHelpers from '../Lib/PushNotificationHelpers'
// import SBHelper from '../Lib/SpecialButtonHelper'
import FadeIn from 'react-native-fade-in-image'

class Talk extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isActive: false,
      animatedSize: new Animated.Value(1)
    }
  }

  handlePressIn = () => {
    Animated.spring(this.state.animatedSize, {
      toValue: 1.05,
      useNativeDriver: true
    }).start()
  }

  handlePressOut = () => {
    Animated.spring(this.state.animatedSize, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true
    }).start()
  }

  render () {
    const {
      isCurrentDay,
      isActive,
      name,
      title,
      avatarURL,
      start,
      duration,
      currentTime,
      isFinished,
      isSpecial,
      setReminder,
      removeReminder
    } = this.props

    const animatedStyle = {
      transform: [{ scale: this.state.animatedSize }]
    }

    const containerStyles = [
      styles.container,
      isCurrentDay && styles.currentDay,
      isActive && styles.active,
      isFinished && styles.finished,
      animatedStyle
    ]

    return (
      <View>
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
          onPress={this.props.onPress}
        >
          <Animated.View style={containerStyles}>
            <View style={styles.info}>
              <View style={styles.infoText}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.title}>{title}</Text>
              </View>
              <FadeIn>
                <Image style={styles.avatar} source={{uri: avatarURL}} />
              </FadeIn>
            </View>
            <TalkInfo
              start={start}
              duration={duration}
              remindMe={this.props.isSpecial}
              isFinished={isFinished || isActive}
              showWhenFinished={this.props.showWhenFinished}
              onPressGithub={this.props.onPressGithub}
              onPressTwitter={this.props.onPressTwitter}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

Talk.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date),
  duration: PropTypes.number,
  isFinished: PropTypes.bool,
  showWhenFinished: PropTypes.bool,
  isSpecial: PropTypes.bool,
  isCurrentDay: PropTypes.bool,
  isActive: PropTypes.bool,
  currentTime: PropTypes.instanceOf(Date),
  onPress: PropTypes.func.isRequired,
  onPressTwitter: PropTypes.func.isRequired,
  onPressGithub: PropTypes.func.isRequired,
  talkSpecial: PropTypes.func.isRequired,
  talkNotSpecial: PropTypes.func.isRequired,
  setReminder: PropTypes.func.isRequired,
  removeReminder: PropTypes.func.isRequired,
  goToCounter: PropTypes.func.isRequired,
  goToTab: PropTypes.func.isRequired,
  goToLogin: PropTypes.func.isRequired,
  goToCoinScreen: PropTypes.func.isRequired,
  scheduleLocalNotification: PropTypes.func.isRequired,
};

export default Talk;
