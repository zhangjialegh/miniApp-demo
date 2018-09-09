const router = require('koa-router')();
const controller = require('../controller/user')

router.post('/user/update', controller.userUpdate)

module.exports = router