import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
// import EthereumTx from 'ethereumjs-tx'
import EthereumWallet from 'ethereumjs-wallet'
const EthereumTx = require('ethereumjs-tx')
import PropTypes from 'prop-types';
import style from './style';

class ContactsList extends React.Component {
  generateETHWallet = () => {
    const privateKey = Buffer.from('e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109', 'hex')
    console.log('generateETHWallet testing!!');
    const privateKeyBuffer = Buffer.from('e8a3c77b968e675d6901496d128669923bc6a8850d9d5d79ee911c3f2d7309c1', 'hex')
    console.log('privateKeyBuffer is ', privateKeyBuffer);
    const wallet = EthereumWallet.fromPrivateKey(privateKeyBuffer)
    console.log('Wallet is ', wallet);
    console.log('wallet.getPrivateKey is ', wallet.getPrivateKey().toString('hex'))
    console.log('allet.getAddress is ', wallet.getAddress().toString('hex'))
    const txParams = {
      nonce: '0x00',
      gasPrice: '0x09184e72a000',
      gasLimit: '0x2710',
      to: '0x0000000000000000000000000000000000000000',
      value: '0x00',
      data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
      // EIP 155 chainId - mainnet: 1, ropsten: 3
      chainId: 3
    }

    const tx = new EthereumTx(txParams)
    console.log('Tx is', tx);
    var signresult = tx.sign(privateKey)
    console.log('signresult ', signresult );
    const serializedTx = tx.serialize()
console.log(serializedTx)
console.log('Printing serializedTx.toString: ');
console.log(serializedTx.toString('hex'))
console.log('dsofter')
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
