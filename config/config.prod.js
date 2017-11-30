'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = exports = {};


  exports.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'app/public'),
    // support lazy load
    dynamic: true,
    preload: false,
    buffer: false,
    maxFiles: 1000,
    jsPath: 'public/js/rev/',
    cssPath: 'public/css/rev/',
  };

  return config;
};
