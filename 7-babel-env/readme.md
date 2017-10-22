在全局引入了babel-polyfill之后，打包后的整个文件体积都会变大。

通过配置env的useBuiltIns参数能够把babel-polyfill中你需要的部分提取出来，不需要的去除，简直是神器。

build目录下两个js文件，一个是使用了useBuiltIns的，一个没有，看名字就能看出：


文件 | 大小
---  | ---
useBuiltIns.js    | 189kb
notUseBuiltIns.js | 259kb
