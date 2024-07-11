import combineRoutes from 'koa-combine-routers';

import publicRouter from './modules/publicRouter';
import aboutRouter from './modules/aboutRouter';
// 合并路由
export default combineRoutes(aboutRouter, publicRouter);