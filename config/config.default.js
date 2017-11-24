'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1511243990337_6103';

  config.latoutPath = {
    admin: '/admin/common/layout.html',
    h5: '',
  };

  // add your config here
  config.middleware = [];

  exports.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'app/public'),
    // support lazy load
    dynamic: true,
    preload: false,
    buffer: false,
    maxFiles: 1000,
  };
  exports.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  exports.ejs = {
    root: path.join(appInfo.baseDir, 'app/view'),
    cache: true,
    debug: false,
    compileDebug: true,
    // delimiter: null,
    // strict: false,
  };

  return config;
};
