const userModel = require('../lib/mysql.js');
const $utils = require('../utils/utils')

exports.userUpdate = async ctx => {
    const data = ctx.request.body
    const {authorization} = ctx.request.header
    const token = authorization ? authorization : null
    const {openId} = $utils.decodeToken(token).payload.data
    
    await userModel.findUserData(openId)
          .then(async (res) => {
            if(res[0]) {
              const User = res[0]
              await userModel.updateUserData(User,data)
                    .then(async (res) => {
                      ctx.body = {
                        code: 200,
                        msg: 'update userinfo success'
                      }
                    })
                    .catch((err) => {
                      console.log(err)
                    })
            } else {
              ctx.body = {
                code: 201,
                msg: 'not found user'
              }
            }
            
          })
          .catch((err) => {
            ctx.body = {
              code: 500,
              msg: err.message
            }
          })
    
}

