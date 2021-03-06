const userModel = require('../lib/user.js');
const addrssModel = require('../lib/address')
const $utils = require('../utils/utils')

exports.addressRecord = async ctx => {
    const data = ctx.request.body
    const {authorization} = ctx.request.header
    if(!authorization) {
      return ctx.body = {
        code: 403,
        msg: 'need authorization'
      }
    }
    const {openId} = $utils.decodeToken(authorization).payload.data
    await userModel.findUserData(openId)
          .then(async (res) => {
            if(res[0]) {
              const User = res[0]
              await addrssModel.addressRecord(User,data)
                    .then(async (res) => {
                      ctx.body = {
                        code: 200,
                        msg: 'address record success'
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

