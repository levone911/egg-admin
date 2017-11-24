'use strict';
module.exports = {
  async renderLayout(tpl, datas) {
    try {
      const data = await new Promise((resolve, reject) => {
        try {
          const data = this.renderView(tpl, datas);
          resolve(data);
        } catch (err) {
          reject(err);
        }
      });
      const layout = this.app.config.latoutPath;
      await this.render(layout.admin, { body: data });
    } catch (err) {
      console.log(err);
    }
  },
};
