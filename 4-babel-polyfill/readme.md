使用webpack打包，babelrc设置了es2015的预设，观察引入polyfill与不引入polyfill的区别

```shell
webpack
```

打包的两个文件在build目录：
1. dist.js  不带polyfill，只有4k，不能在ie运行，Object.assign未定义
2. distHasPolyfill.js  带polyfill，259k，能在ie运行