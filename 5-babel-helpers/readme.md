当前目录命令行运行如下命令，输出helpers.js

```shell
../node_modules/.bin/babel-external-helpers > helpers.js
```

通过运行webpack，可以看到dist.js中的Object.assign被转译成了`babelHelpers.extends`

![1](./img/1.jpg)
![2](./img/2.jpg)