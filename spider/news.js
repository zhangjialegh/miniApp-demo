const url_news = 'https://api.readhub.cn/topic?lastCursor=103040&pageSize=20'

const newsModel = require('../lib/news.js');
const axios = require('axios')


const spider = async (lastCursor, pageSize)=> {
  let res = await axios.get(`https://api.readhub.cn/topic?lastCursor=${lastCursor}&pageSize=${pageSize}`)
  const { data } = res.data
  const range = data.map((item) => {
     const ex = {}
     ex.title = item.title
     ex.id = item.id
     ex.order = item.order
     ex.insert_time = item.updatedAt
     ex.jsonstr = item
     ex.publish_time = item.publishDate
     return ex
  })

  range.forEach(async element => {
    try {
      await newsModel.insertData(element)
      console.log('入库成功！')
    } catch (error) {
      console.log(error);
    }
  })
}

const process = () => {
  let lastCursor = 1
  let pageSize = 20
  while (lastCursor < 2000) {
    spider(lastCursor, pageSize)
    lastCursor += pageSize
  }
}

exports.newsInsert = () => {
  process()
  const timer = 1000*60*60
  clearInterval(t)
  const t = setInterval(() => {
    process()
  }, timer)
}