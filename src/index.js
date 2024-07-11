import Koa from 'koa'
import router from './router/routes';
import {koaBody }from 'koa-body'
import cors from '@koa/cors'
import json from 'koa-json'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import path from 'path'
import compose from 'koa-compose';
import compress from 'koa-compress'
const app = new Koa();

// 判断是否为开发模式，是则true，否则false
const isDevMode = process.env.NODE_ENV === 'production' ? false : true

// compose集合中间件
const middleware = compose([
  koaBody(),
  cors(),
  json(),
  helmet(),
  statics(path.join(__dirname, '../public')),
]);

app.use(middleware);
app.use(router());


// 开发模式为3000端口，生产模式为12006
const port = !isDevMode ? '12006' : '3000'
// 生产模式压缩中间件
if (!isDevMode) {
  app.use(compress())
}
// 监听3000端口
app.listen(port, () => {
  console.log(`The server is runing at: ${port}`);
});
