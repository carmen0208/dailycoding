
### ways of javascript package loading

Module System | Common Syntax
| ---| --- |
CommonJs(Nodejs way) | module.exports, require
AMD | define | require
ES2015 | export import

* [how to load ES6 with webpack](https://github.com/babel/babel-loader)
* [How to load CSS file with a sperated file](https://github.com/webpack-contrib/mini-css-extract-plugin)
  * For basic webpack style of css-loader, it loads the css file to build.js file. and then using javascript to inject those code to header of the target html file which include those build.js. which is kind hacky and plain css text ad a style in js file see odd, the link is to using a plugin to sepeare css into another file. it only for webpack4.

#### reference 
* [boilerplate](https://github.com/marharyta/webpack-boilerplate)