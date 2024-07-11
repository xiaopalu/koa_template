这是一个Koa的项目，使用了webpack5进行打包压缩，可以使用CLI命令快速创建一个koa的工程化项目。

# 使用方式

安装CLI

```shell
npm i wuyan_koacli -g
```

初始化项目

```shell
WY init koa project-name
```

启动项目：

```shell
# 安装依赖
npm install 
# 启动项目
npm run dev
# 打包项目
npm run bulid
```

其他命令：

```shell
# nodemon nodemon热加载 这里监听的是webpack打包后文件 推荐
npm run dev

# nodemon 热加载命令ES6语法 这里监听的是源代码改动 不推荐
npm run start

# clean 清除dist文件
npm run clean

# nodemon 监听打包后文件（需要先打包）
npm run debug

# webpack 监听打包后文件
npm run watch

# nodemon 热加载命令ES5语法 改写ES6语法后 弃用
npm run start:es5
```



# 集成的中间件

- koa-body
- koa-combine-routers
- koa-json
- koa-router
- @koa/cors
- koa-helmet
- koa-static
- koa-compose



# Webpack用到的插件和loader

- clean-webpack-plugin
- webpack-node-externals
- @babel/core
- @babel/node
- @babel/preset-env
- babel-loader
- webpack-merge