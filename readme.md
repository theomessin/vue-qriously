# vue-qriously

A Vue.js 2 component to draw QR codes on an HTML Canvas using [qrious](https://github.com/neocotic/qrious).

## Installation

- #### With Modules

  ``` js
  // ES6
  import Vue from 'vue'
  import VueQriously from 'vue-qriously'
  Vue.use(VueQriously)

  // ES5
  var Vue = require('vue')
  Vue.use(require('vue-qriously').default)
  ```

- #### `<script>` Include

  Just include `./dist/vue-qriously.js` after Vue itself.

## Usage

There's nothing you need to do in JavaScript except for installation. To use the plugin, simply use the `qriously` component.

``` html
<qriously value="Hello World!" :size="200" />
```

You may use all of [these](https://github.com/neocotic/qrious#api) props to change the format of your QR code.

## License

[MIT](http://opensource.org/licenses/MIT)