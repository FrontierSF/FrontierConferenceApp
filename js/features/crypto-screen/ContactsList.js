import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
// import EthereumTx from 'ethereumjs-tx'
import EthereumWallet from 'ethereumjs-wallet'

import PropTypes from 'prop-types';
import style from './style';

class ContactsList extends React.Component {
  generateETHWallet = () => {
    console.log('generateETHWallet testing!!');
    const privateKeyBuffer = Buffer.from('e8a3c77b968e675d6901496d128669923bc6a8850d9d5d79ee911c3f2d7309c1', 'hex')
    console.log('privateKeyBuffer is ', privateKeyBuffer);
    const wallet = EthereumWallet.fromPrivateKey(privateKeyBuffer)
    console.log('Wallet is ', wallet);
    console.log('wallet.getPrivateKey is ', wallet.getPrivateKey().toString('hex'))
    console.log('allet.getAddress is ', wallet.getAddress().toString('hex'))
    // const secret = 'open-sesame';
    // // console.log(crypto);
    // const hash = crypto.createHmac('sha256', secret)
    //                    .update('abcdefg')
    //                    .digest('hex');
    // console.log(hash);
  };

  renderCoinCards() {
    const { coins } = this.props;
    return coins.map(coin => (
      <CoinCard
        key={coin.id}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_24h={coin.percent_change_24h}
        percent_change_7d={coin.percent_change_7d}
      />
    ));
  }
  // render() {
  //   return (
  //     <ScrollView contentContainerStyle={style.container}>
  //       {this.renderCoinCards()}
  //     </ScrollView>
  //   );
  // }
  render() {
    return (
      <ScrollView contentContainerStyle={style.container}>
        <View>
        <Text>Contacts Go here</Text>
        </View>
        <TouchableOpacity onPress={this.generateETHWallet} style={style.textView}>
          <Text style={style.text}>Generate wallet</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

// Coins.propTypes = {
//   coins: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default ContactsList;
