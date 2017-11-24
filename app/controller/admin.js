'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
    const renderData = await new Promise((resolve, reject) => {
      try {
        const data = ctx.renderView('pages/grid.html', { data: '111' });
        console.log(data);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
    await ctx.render('layout.html', { body: renderData });
  }
}

module.exports = HomeController;

