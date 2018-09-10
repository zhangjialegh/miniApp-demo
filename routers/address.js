const router = require('koa-router')();
const controller = require('../controller/address')

router.post('/address/record', controller.addressRecord)

module.exports = router