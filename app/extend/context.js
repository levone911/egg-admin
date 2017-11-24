'use strict';
module.exports = {
  async renderLayout(tpl, datas) {
    try {
      const data = await new Promise((resolve, reject) => {
        try {
          const data = this.renderView(tpl, datas);
          console.log(data);
          resolve(data);
        } catch (err) {
          reject(err);
        }
      });
      await this.render('layout.html', { body: data });
    } catch (err) {
      console.log(err);
    }
  },
};
