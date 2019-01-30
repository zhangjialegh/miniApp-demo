const userModel = require('../lib/user.js');
const $utils = require('../utils/utils')

exports.wxLogin = async ctx => {
  try {
    const res = await $utils.code_to_session(ctx.request.body, ctx.request.body.code)
    const openId = res.data.openid
    const scene = ctx.request.body.scene
    let   data={}
          data['wechat_openid'] = openId
          data['third_session'] = $utils.createToken({openId: openId},3)
          data['scene'] = scene
          data['need'] = true
			var params = []
			Object.keys(data).map((item) => {
				params.push(data[item])
      })
    try {
      const resMiddle = await userModel.findUserData(openId)
      if(resMiddle[0]&&resMiddle[0].wechat_nickname) {
        ctx.body = {
            code: 200,
            message: '用户登录成功',
            third_session: $utils.createToken({openId: openId},3),
            id: resMiddle[0].id
          };
      } else if (resMiddle[0]) {
        data['need'] = true
        ctx.body = {
          code: 200,
          need: true,
          third_session: $utils.createToken({openId: openId},3),
          id: resMiddle[0].id
        }
      } else {
       try {
         const res = await userModel.insertUserData(params)
         if(res) {
          ctx.body = {
            code: 200,
            need: true,
            third_session: $utils.createToken({openId: openId},3),
            id: resMiddle.insertId
          }    
        }
       } catch (err) {
        ctx.body = {
          code: 500,
          msg: err.message
        }
       }
      }
    } catch (err) {
      ctx.body = {
        code: 500,
        msg: err.message
      }
    }

  } catch (err) {
    ctx.body = {
      code: 500,
      msg: err.message
    }
  }
}

