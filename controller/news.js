const newsModel = require('../lib/news.js');

exports.newsTopic = async ctx => {
  const { lastCursor=0, pageSize=20 } = ctx.request.query
    try {
      const res = await newsModel.getTopic(lastCursor, pageSize)
      const data = res.map((item) => {
        let ele = item
        ele['inteval'] = Math.ceil((Date.now() - new Date(item.publish_time).getTime())/1000/60)
      console.log(ele['inteval'],'fdsfsfs');

        return ele
      })
      
      ctx.body = {
        code: 200,
        success: true,
        data: data
      }
    } catch (error) {
      console.log(error)
    }
}

