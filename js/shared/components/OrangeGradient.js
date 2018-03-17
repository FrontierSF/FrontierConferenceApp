import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../../themes'

export default (props) => {
  const gradient = [Colors.orange, Colors.darkOrange]
  return (
    <LinearGradient colors={gradient} style={props.style}>
      {props.children}
    </LinearGradient>
  )
}
