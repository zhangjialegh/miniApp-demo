const router = require('koa-router')();
const controller = require('../controller/wxlogin')

router.post('/wechat/login', controller.wxLogin)

module.exports = router