import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
// import { Images } from '../Themes'
import styles from './styles'

// interface RemindMeProps {
//   on: boolean
//   onPress (): void
// }

const RemindMeButton = (props) => {
  const { on, onPress } = props
  // const icon = on ? Images.activeNotificationIcon : Images.inactiveNotificationIcon
  //<Image source={icon} style={styles.icon} />
  const buttonText = on ? 'Turn Off' : 'Remind Me'

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, on && styles.activeButton]}>

        <Text style={[styles.text, on && styles.activeText]}>
          {buttonText}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default RemindMeButton
