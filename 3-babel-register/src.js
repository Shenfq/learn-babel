require('babel-register');
var es5 = require('./es6.js');  //es6.js中的es6语法将被转译成es5

console.log(es5.toString()); //通过toString方法，看看控制台输出的函数是否被转译