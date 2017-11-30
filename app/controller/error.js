'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let status = '404';
    if (ctx.url !== '/404') {
      status = '500';
    }
    await this.ctx.renderLayout('error.html', {
      serverStatus: status,
      js: false,
      css: false,
    });
  }
}

module.exports = HomeController;

