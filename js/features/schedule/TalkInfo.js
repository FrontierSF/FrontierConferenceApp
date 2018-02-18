import React from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
// import RemindMeButton from './RemindMeButton'
import { format } from 'date-fns'
import styles from './TalkInfoStyle'

const TalkInfo = (props) => {
  const { start, duration, remindMe, toggleRemindMe, isFinished, showWhenFinished } = props
  const formattedStart = format(start, 'h:mmA')
  const showRemindMe = !isFinished
  const showSocialMedia = isFinished && showWhenFinished

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>
            Start
          </Text>
          <Text style={styles.detailText}>
            {formattedStart}
          </Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>
            Duration
          </Text>
          <Text style={styles.detailText}>
            {`${duration} Minutes`}
          </Text>
        </View>
      </View>
      {showRemindMe &&
        <View style={styles.remindMe}>
        </View>
      }
    </View>
  )
}

TalkInfo.propTypes = {
  start: PropTypes.instanceOf(Date),
  duration: PropTypes.number,
  remindMe: PropTypes.bool,
  isFinished: PropTypes.bool,
  showWhenFinished: PropTypes.bool,
  toggleRemindMe:  PropTypes.func.isRequired,
  onPressGithub:  PropTypes.func.isRequired,
  onPressTwitter:  PropTypes.func.isRequired,
};

export default TalkInfo
