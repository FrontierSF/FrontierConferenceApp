import React from 'react';
import { Text, View, Alert, TouchableOpacity,TouchableWithoutFeedback, Image, Dimensions, Keyboard } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Sae } from 'react-native-textinput-effects';

import PropTypes from 'prop-types';
import OrangeGradient from '../../shared/components/OrangeGradient';
import { Colors } from '../../themes';
import { Button, FormValidationMessage } from 'react-native-elements';

import style from './style';

const width = Dimensions.get('window').width;

class RegScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validRegCode: false,
      displayError: false,
      displayValidCode: false,
      regCode: ''
    }
  }

  render() {
    const { goToTab, regCodeIsValid, login } = this.props;
    const { validRegCode, displayError, displayValidCode, regCode } = this.state;
    const buttonColor = validRegCode ? Colors.orange : Colors.bloodOrange
    const widthInput = width * 0.65
    const infoIcon = (<FeatherIcon
                      style={{marginLeft:14, marginTop: 19}}name="info" size={28}
                      onPress={() => {
                        Alert.alert(
                          'Registration Code',
                          'The registration code should be in your email from Frontier.'
                        )
                      }}
                      color="white"/>)
    return (
      <OrangeGradient style={style.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <Image style={style.logo} source={require('../../shared/assets/footerlogo.png')} />
        </TouchableWithoutFeedback>
        {displayError ? <Text style={style.error}>Invalid registration code!</Text> : null}
        {displayValidCode ? <Text style={style.error}>Registration code is valid!</Text> : null}
        <View style={{flexDirection: 'row', backgroundColor:'rgba(0,0,0,0)', alignItems: 'center'}} >
          <Sae
            style={{ width: (widthInput-60), marginBottom: 20}}
            label={'Registration Code'}
            iconClass={FontAwesomeIcon}
            iconName={'pencil'}
            iconColor={'white'}
            labelStyle={{ color: 'white', fontStyle: 'italic', fontWeight: 'normal' }}
            inputStyle={{ color: 'white' }}
            keyboardType="numeric"
            onChangeText={(text) => {
              this.setState({
                displayError: false,
                displayValidCode: regCodeIsValid(text),
                regCode: text,
                validRegCode: regCodeIsValid(text)
              });
            }}
            // TextInput props
            autoCapitalize={'none'}
            autoCorrect={false}
          />
          {infoIcon}
        </View>

        <Button
          raised
          containerViewStyle={{width:widthInput}}
          color={buttonColor}
          onPress={
            () => {
              if (validRegCode) {
                login(regCode)
                goToTab()
              }
              this.setState({
                displayError:true,
                displayValidCode: false
              });
            }
          }
          borderRadius={10}
          backgroundColor='white'
          title='Sign In' />
      </OrangeGradient>
    );
  }
}

RegScreen.propTypes = {
  login: PropTypes.func.isRequired,
  goToTab: PropTypes.func.isRequired,
  regCodeIsValid: PropTypes.func.isRequired,
};

export default RegScreen;
