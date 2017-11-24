'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
    await ctx.renderLayout('/admin/grid.html', { data: '111' });
  }
}

module.exports = HomeController;

