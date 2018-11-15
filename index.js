const Koa = require('koa');
const path = require('path')
const bodyParser = require('koa-bodyparser');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const config = require('./config/default.js');
const views = require('koa-views')
// const koaStatic = require('koa-static')
const staticCache = require('koa-static-cache')
const app = new Koa()
const NODE_ENV = process.env.NODE_ENV === 'dev' ? 'dev' : 'prod'

// session存储配置
const sessionMysqlConfig= {
  user: config[NODE_ENV].database.USERNAME,
  password: config[NODE_ENV].database.PASSWORD,
  database: config[NODE_ENV].database.DATABASE,
  host: config[NODE_ENV].database.HOST,
}

// 配置session中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))


// 配置静态资源加载中间件
// app.use(koaStatic(
//   path.join(__dirname , './public')
// ))
// 缓存
app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
app.use(bodyParser({
  formLimit: '1mb'
}))

//  路由
app.use(require('./routers/wxlogin.js').routes())
app.use(require('./routers/user.js').routes())
app.use(require('./routers/address.js').routes())
app.use(require('./routers/news.js').routes())


app.listen(config[NODE_ENV].port)

console.log(`listening on port ${config[NODE_ENV].port}`)
