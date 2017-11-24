'use strict';
module.exports = {
  async renderLayout(tpl, datas) {
    const data = await new Promise((resolve, reject) => {
      try {
        const data = this.renderView(tpl, datas);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
    const menu = await new Promise((resolve, reject) => {
      try {
        const data = this.renderView('/admin/common/sidebar.html', { test: '1111' });
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
    const layout = this.app.config.latoutPath;
    await this.render(layout.admin, { body: data, sidebar: menu });
  },
};
