# jstransformer-liquid

[Liquid for Node.js](https://github.com/sirlantis/liquid-node) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-liquid/master.svg)](https://travis-ci.org/jstransformers/jstransformer-liquid)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-liquid/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-liquid)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-liquid/master.svg)](http://david-dm.org/jstransformers/jstransformer-liquid)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-liquid.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-liquid.svg)](https://www.npmjs.org/package/jstransformer-liquid)

## Installation

    npm install jstransformer-liquid

## API

```js
var liquid = require('jstransformer')(require('jstransformer-liquid'))

liquid.renderAsync('Hello {{ name }}!', {
  name: 'World'
}).then(function (result) {
  //=> 'Hello, World!'
}
```

## License

MIT
