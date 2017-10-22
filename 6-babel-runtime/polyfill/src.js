require('babel-polyfill');
import a from './a.js';
import b from './b.js';

console.log(Object.assign(a, b));