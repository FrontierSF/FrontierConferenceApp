import './shim'
import Root from "./js/root";

import crypto from 'crypto'
console.disableYellowBox = true;
console.log('App start 3!');
console.log(crypto.randomBytes(32).toString('hex'))
const app = new Root();
