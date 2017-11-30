'use strict';
const revJs = require('../public/js/rev/rev-manifest.json');
const revCss = require('../public/css/rev/rev-manifest.json');
const createMenu = {
  menuJson: 'undefined',
  menuHtml: (list, isSub) => {
    createMenu.menuJson = list.map(item => {
      const { href, className, name, subMenu } = item;
      let sub = '',
        menuItem = '';
      if (subMenu && subMenu.length > 0) {
        sub = [ '<ul class="treeview-menu">', createMenu.menuHtml(subMenu, true), '</ul>' ].join('');
      }
      if (isSub && !subMenu) {
        menuItem = `<li><a href="${href}"><i class="fa fa-circle-o"></i> ${name}</a>${sub}</li>`;
      } else {
        if (!subMenu) {
          menuItem = `<li><a href="${href}"><i class="fa ${className}"></i> ${name}</a></li>`;
        } else {
          menuItem = `<li class="treeview">
                  <a href="${href}">
                    <i class="fa ${className}"></i><span>${name}</span>
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  ${sub}
                </li>`;
        }
      }
      return menuItem;
    }).join('');
    return createMenu.menuJson;
  },
  getMenu: () => {
    return createMenu.menuJson;
  },
};

module.exports = {
  async renderLayout(tpl, datas) {
    if (!tpl) {
      this.logger.error('没有给layout传入参数');
    }
    if (tpl.indexOf('.') !== -1) {
      tpl = tpl.split('.')[0];
    }
    if (!datas) {
      datas = {};
    }
    if (datas.js === undefined) datas.js = true;
    if (datas.css === undefined) datas.css = true;
    let scriptPath = false,
      stylePath = false;
    const configStatic = this.app.config.static;
    // 模版是否需要引入js
    const app = this.app;
    if (datas.js) {
      if (app.config.env === 'local') {
        scriptPath = configStatic.jsPath + tpl + '.js';
      } else {
        scriptPath = configStatic.jsPath + revJs[(tpl + '.js')];
      }
    }
    // 模版是否需要引入css
    if (datas.css) {
      if (app.config.env === 'local') {
        stylePath = configStatic.cssPath + tpl + '.css';
      } else {
        stylePath = configStatic.cssPath + revCss[(tpl + '.css')];
      }
    }
    const layout = this.app.config.latoutPath.admin;
    if (!layout) {
      this.logger.error('未找到模板路径配置');
    }
    // 渲染目标模版
    const data = await new Promise((resolve, reject) => {
      try {
        const data = this.renderView(tpl, datas);
        resolve(data);
      } catch (err) {
        this.logger.error('渲染目标模版：', err);
        reject(err);
      }
    });
    // 渲染用户菜单
    const menu = await new Promise((resolve, reject) => {
      if (createMenu.getMenu() === 'undefined') {
        createMenu.menuHtml(layout.menuTree);
      }
      const menuJson = createMenu.getMenu();
      try {
        const data = this.renderView(layout.sidebar, { menu: menuJson });
        resolve(data);
      } catch (err) {
        this.logger.error('渲染用户菜单：', err);
        reject(err);
      }
    });
    await this.render(layout.path, { body: data, sidebar: menu, jsPath: scriptPath, cssPath: stylePath });
  },
};
