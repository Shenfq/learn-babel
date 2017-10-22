const babel = require('babel-core');

var result = babel.transform('const add = (one, two) => one + two;');

console.log(result.code);
console.log(result.map);
console.log(result.ast);