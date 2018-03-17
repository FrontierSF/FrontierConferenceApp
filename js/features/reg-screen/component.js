import React from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import OrangeGradient from '../../shared/components/OrangeGradient';
import { Colors } from '../../themes';
import { Button } from 'react-native-elements';

import style from './style';

const width = Dimensions.get('window').width;

class RegScreen extends React.Component {
  render() {
    const { goToTab } = this.props;
    return (
      <OrangeGradient style={style.container}>
        <Image style={style.logo} source={require('../../shared/assets/footerlogo.png')} />
        <Text style={style.textSub}>
          Enter Reg Code
        </Text>
        <Button
          raised
          containerViewStyle={{width: width * 0.65 }}
          color={Colors.orange}
          borderRadius={10}
          backgroundColor='white'
          title='Sign In' />

      </OrangeGradient>
    );
  }
}

RegScreen.propTypes = {
  goToTab: PropTypes.func.isRequired,
};

export default RegScreen;
