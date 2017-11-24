'use strict';

module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/admin', app.controller.admin.index);
};
