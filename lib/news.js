const { News } = require('../model')

// 注册用户
exports.insertData = ( {id,order,title,jsonstr,insert_time} ) => {
  return News.create({
    id,
    order,
    title,
    jsonstr,
    insert_time
  })
}