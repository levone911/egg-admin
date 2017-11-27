/**
 * Created by levone on 17/11/27.
 * Description
 */
'use strict';
module.exports = [
  {
    href: '#',
    name: '用户管理',
    className: 'fa-dashboard',
    subMenu: [
      {
        href: '/index',
        name: '分销用户',
      },
      {
        href: '/index2',
        name: '系统管理员',
      },
    ],
  },
  {
    href: '#',
    name: '系统设置',
    className: 'fa-files-o',
    subMenu: [
      {
        href: '/index',
        name: '用户设置',
      },
      {
        href: '/index2',
        name: '店铺设置',
      },
    ],
  },
  {
    href: '#',
    name: '三级菜单',
    className: 'fa-share',
    subMenu: [
      {
        href: '#',
        name: '第二层',
        subMenu: [
          {
            href: '/index',
            name: '第三层',
          },
          {
            href: '/index2',
            name: '第三层',
          },
        ],
      },
    ],
  },
  {
    href: 'index',
    name: '无子菜单',
    className: 'fa-book',
  },
];
