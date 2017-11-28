/**
 * Created by levone on 17/11/27.
 * Description
 */
'use strict';
module.exports = () => {
  return async function(ctx, next) {
    await next();
    // 404 || 500 判断
    const status = parseInt(ctx.status);
    if (status === 404) {
      ctx.redirect('/404');
    } else if (status === 500) {
      ctx.redirect('/500');
    } else {
      await next();
    }
  };
};
