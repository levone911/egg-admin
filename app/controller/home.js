'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('test.html', {
      data: 'world',
    });
  }
}

module.exports = HomeController;

