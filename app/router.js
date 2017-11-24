'use strict';

module.exports = app => {
  // h5部分
  app.get('/', app.controller.home.index);
  // admin部分
  app.get('/admin', app.controller.admin.index);
  app.get('/api/dataTable/test', app.controller.admin.dataTable);
};
