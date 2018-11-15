const url_news = 'https://api.readhub.cn/topic?lastCursor=103040&pageSize=20'

const newsModel = require('../lib/news.js');
const axios = require('axios')

let lastCursor = ''
let pageSize = 20
let count = 10

const spider = async (lastCursor, pageSize)=> {
  
  let res = await axios.get(`https://api.readhub.cn/topic?lastCursor=${lastCursor}&pageSize=${pageSize}`)
  const { data } = res.data
  console.log(lastCursor,'lastCursor, pageSize');
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
      // console.log(error);
    }
  })

  return new Promise((resolve, reject) => {
    resolve(data[data.length-1].order)
  })
}

const process = async () => {
  lastCursor = await spider(lastCursor, pageSize)
  if(lastCursor < 70000 && lastCursor !== '') return;
  process()
}


exports.newsInsert = () => {
  process()
  const timer = 1000*60*60
  setInterval(() => {
    lastCursor = ''
    process()
  }, timer)
}