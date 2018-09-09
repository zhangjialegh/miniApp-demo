const router = require('koa-router')();
const controller = require('../controller/wx-login')

router.post('/wechat/login', controller.wxLogin)

module.exports = router