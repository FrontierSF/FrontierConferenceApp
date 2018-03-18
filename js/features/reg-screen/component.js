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
  constructor(props) {
    super(props);
    this.state = {
      validRegCode: false,
      displayError: false
    }
  }

  render() {
    const { goToTab, regCodeIsValid } = this.props;
    const { validRegCode, displayError } = this.state;
    const buttonColor = validRegCode ? Colors.orange : Colors.bloodOrange
    const widthInput = width * 0.65

    return (
      <OrangeGradient style={style.container}>
        <Image style={style.logo} source={require('../../shared/assets/footerlogo.png')} />

        {displayError ? <Text style={style.error}>Invalid registration code!</Text> : null}
        <Sae
          style={{ width: (widthInput-10), marginBottom: 20}}
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
              validRegCode: regCodeIsValid(text)
            });
          }}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <Button
          raised
          containerViewStyle={{width:widthInput}}
          color={buttonColor}
          onPress={
            () => {
              if (validRegCode) {
                goToTab()
              }
              this.setState({
                displayError:true
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
  goToTab: PropTypes.func.isRequired,
  regCodeIsValid: PropTypes.func.isRequired,
};

export default RegScreen;
