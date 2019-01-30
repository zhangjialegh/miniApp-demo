const router = require('koa-router')();
const controller = require('../controller/news')
const spider = require('../spider/news')

router.get('/news/insert', spider.newsInsert)
router.get('/news/topic', controller.newsTopic)

module.exports = router