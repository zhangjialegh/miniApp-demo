const newsModel = require('../lib/news.js');

exports.newsTopic = async ctx => {
  const { lastCursor=0, pageSize=20 } = ctx.request.query
    try {
      const res = await newsModel.getTopic(lastCursor, pageSize)
      ctx.body = {
        code: 200,
        success: true,
        data: res
      }
    } catch (error) {
      console.log(error)
    }
}

