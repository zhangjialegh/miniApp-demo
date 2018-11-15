const userModel = require('../lib/user.js');
const $utils = require('../utils/utils')

exports.userUpdate = async ctx => {
    const data = ctx.request.body
    const {authorization} = ctx.request.header
    const token = authorization ? authorization : null
    const {openId} = $utils.decodeToken(token).payload.data
    try {
      const res = await userModel.findUserData(openId)
      if(res[0]) {
        const User = res[0]
        try {
          await userModel.updateUserData(User, data)
          ctx.body = {
            code: 200,
            msg: 'update userinfo success'
          }
        } catch (error) {
          console.log(err)
        }
      } else {
        ctx.body = {
          code: 201,
          msg: 'not found user'
        }
      }
    } catch (err) {
      ctx.body = {
        code: 500,
        msg: err.message
      }
    }
}

