'use strict';
const createMenu = {
  menuJson: '',
  menuHtml: (list, isSub) => {
    return list.map(item => {
      const { href, className, name, subMenu } = item;
      let sub = '',
        menuItem = '';
      console.log(subMenu && subMenu.length > 0);
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
  },
  getMenu: () => {
    return createMenu.menuJson;
  },
};

module.exports = {
  async renderLayout(tpl, datas) {
    const layout = this.app.config.latoutPath.admin;
    // 渲染目标模版
    const data = await new Promise((resolve, reject) => {
      try {
        const data = this.renderView(tpl, datas);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
    // 渲染用户菜单
    const menu = await new Promise((resolve, reject) => {
      const menuJson = createMenu.menuHtml(layout.menuTree);
      console.log(menuJson);
      try {
        const data = this.renderView(layout.sidebar, { menu: menuJson });
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
    await this.render(layout.path, { body: data, sidebar: menu });
  },
};
