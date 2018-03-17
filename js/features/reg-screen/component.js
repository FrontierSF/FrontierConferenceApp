import React from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

import PropTypes from 'prop-types';
import OrangeGradient from '../../shared/components/OrangeGradient';
import { Colors } from '../../themes';
import { Button, FormValidationMessage } from 'react-native-elements';

import style from './style';

const width = Dimensions.get('window').width;

class RegScreen extends React.Component {
  //this.setState({text})
  render() {
    const { goToTab } = this.props;
    const widthInput = width * 0.65
    // 1) Check if input in state is valid and
    //
    return (
      <OrangeGradient style={style.container}>
        <Image style={style.logo} source={require('../../shared/assets/footerlogo.png')} />
        <Sae
          style={{ width: (widthInput-10), marginTop: 10, marginBottom: 20}}
          label={'Registration Code'}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={'white'}
          labelStyle={{ color: 'white', fontStyle: 'italic', fontWeight: 'normal' }}
          inputStyle={{ color: 'white' }}
          keyboardType="numeric"
          onChangeText={(text) => { console.log('Keyboard changed ', text);}}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <Button
          raised
          containerViewStyle={{width:widthInput}}
          color={Colors.orange}
          onPress={goToTab}
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
