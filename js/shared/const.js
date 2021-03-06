import { isAndroid } from '../utils';

export const cyptoAPIBaseURL = 'http://165.227.49.49/app/';
// 'https://api.coinmarketcap.com';

export const navigatorStyle = {
  navBarBackgroundColor: 'white',
  navBarTextColor: 'black',
  navBarHidden: true,
  navBarSubtitleTextColor: 'blue',
  statusBarTextColorScheme: 'light',
  navBarButtonColor: isAndroid() ? 'transparent' : 'black',
  drawUnderNavBar: false,
};

export const navTypes = {
  single: 'single',
  tab: 'tab',
};

export const cryptoImages = {
  BTC:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609483/bitcoin_eqld4v.png',
  ETH:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609485/ethereum_nw0chu.png',
  XRP:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/ripple_p0xeut.png',
  BCH:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609483/bitcoin-cash_cvt54z.png',
  LTC:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609485/litecoin_q8e17h.png',
  DASH:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609484/dash_oltvqi.png',
  XEM:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/nem_imprip.png',
  BCC:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/bitconnect_oj1bo5.png',
  XMR:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/monero_wzk3ur.png',
  NEO:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/neo_fvoo6c.png',
};
