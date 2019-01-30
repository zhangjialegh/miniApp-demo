const { News } = require('../model')

// 注册用户
exports.insertData = ( {id,order,title,jsonstr,insert_time, publish_time} ) => {
  return News.create({
    id,
    order,
    title,
    jsonstr,
    insert_time,
    publish_time
  })
}

exports.getTopic = async (lastCursor, pageSize) => {
  console.log(lastCursor, pageSize,'lastCursor, pageSize');
  
  const topicList = await News.findAll({
    where: {
      publish_time: {
        $ne: null
      }
    },
    order: [
      ['order','DESC']
    ]
  })
  const res = topicList.slice(lastCursor, pageSize)
  return res
}