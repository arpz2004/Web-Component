"use strict";
exports.__esModule = true;
exports["default"] = {
  post: function() {
    require('child_process').execSync('node node_modules/concat/bin/concat -o ./dist/web-components/web-components.js ./dist/web-components/runtime.js ./dist/web-components/polyfills.js ./dist/web-components/scripts.js ./dist/web-components/main.js')
  }
}