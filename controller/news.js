const newsModel = require('../lib/news.js');
const $utils = require('../utils/utils')
const { news } = require('../spider/news')
const axios = require('axios')

exports.newsInsert = async ctx => {
  let res = await axios.get(news)
    console.log(res,'gg');
    
}

