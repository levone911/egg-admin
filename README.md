# adminSystem

PC管理后台
![PC管理后台](https://github.com/linwh8/ModernWebPrograming/raw/master/app/public/img/admin.jpg)

### 功能描述

1、layout模版，扩展ctx.renderLayout方法；
2、中间件login登陆判断
3、AdminLTE 的工作台，和dataTable、dialog、form等 demo；
4、404 || 500 页面
5、gulp处理监听、编译、压缩、混存
6、基于开发、测试、线上环境配置

PS: view 模版名对应public文件下less及js文件名（自动获取）；如不需要css或js 请renderLayout传参 { js:false, css:false }


## QuickStart

<!-- add docs here for user -->
基于[egg][egg] ＋ AdminLTE 搭建后台管理系统

### Development


```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org