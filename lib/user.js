const { User } = require('../model')

// 注册用户
exports.insertData = ( value ) => {
  return User.create({
    name: value[0],
    pass: value[1],
    avator: value[2],
    moment: value[3]
  })
}
// 微信登录
exports.findUserData = ( openId ) => {
  return User.findAll({
    where: {wechat_openid: openId}
  })
}
exports.findDataByName = ( name ) => {
  return User.findAll({
    where: {name: name}
  })
}
exports.insertUserData = (params) => {
  return User.create({
    wechat_openid: params[0],
    third_session: params[1],
    scene: params[2]
  })
}
exports.updateUserData = (User,params) => {
  return User.update({
    wechat_nickname: params.nickName,
    wechat_province: params.province,
    wechat_city: params.city,
    wechat_country: params.country,
    wechat_avatar_uri: params.avatarUrl
  })
}
