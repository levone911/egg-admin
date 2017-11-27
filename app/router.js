'use strict';

module.exports = app => {
  // 页面
  app.get('/', app.controller.admin.index);
  app.get('/login', app.controller.login.index);
  // api接口
  app.get('/api/dataTable/test', app.controller.admin.dataTable);
};
