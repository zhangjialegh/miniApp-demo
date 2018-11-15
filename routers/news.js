const router = require('koa-router')();
const controller = require('../controller/news')
const spider = require('../spider/news')

router.get('/news/insert', spider.newsInsert)

module.exports = router