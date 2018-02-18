import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../../themes'

export default (props) => {
  // TODO: Change to the different shades of orange
  const gradient = [Colors.orange, Colors.darkOrange]
  return (
    <LinearGradient colors={gradient} style={props.style}>
      {props.children}
    </LinearGradient>
  )
}
