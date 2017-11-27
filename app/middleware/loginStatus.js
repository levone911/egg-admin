/**
 * Created by levone on 17/11/27.
 * Description
 */
'use strict';
module.exports = () => {
  return async function(ctx, next) {
    // 固定session，以供测试
    ctx.session = {
      use: {
        id: '1111',
      },
    };

    // 判断用户是否登陆
    if (ctx.url !== '/login') {
      if (ctx.session && ctx.session.use && ctx.session.use.id) {
        await next();
      } else {
        ctx.redirect('/login');
      }
    } else {
      await next();
    }
  };
};
