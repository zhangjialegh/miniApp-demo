const userModel = require('../lib/mysql.js');
const $utils = require('../utils/utils')

exports.wxLogin = async ctx => {
   await $utils.code_to_session(ctx.request.body, ctx.request.body.code).then(async (res) => {
      console.log(res.data,'code-to-session');
      const openId = res.data.openid
      const scene = ctx.request.body.scene
      var data={}
          data['wechat_openid'] = openId
          data['third_session'] = $utils.createToken({openId: openId},3)
          data['scene'] = scene
          data['need'] = true
			var params = []
			Object.keys(data).map((item) => {
				params.push(data[item])
			})
      await userModel.findUserData(openId)
            .then(async (result) => {
              if(result[0]&&result[0].wechat_nickname) {
                ctx.body = {
                    code: 200,
                    message: '用户登录成功',
                    third_session: $utils.createToken({openId: openId},3),
                    id: result[0].id
                  };
              } else if (result[0]) {
                data['need'] = true
                ctx.body = {
                  code: 200,
                  need: true,
                  third_session: $utils.createToken({openId: openId},3),
                  id: result[0].id
                }
              } else {
                await userModel.insertUserData(params)
                      .then((res) => {
                        if(res) {
                          ctx.body = {
                            code: 200,
                            need: true,
                            third_session: $utils.createToken({openId: openId},3),
                            id: result.insertId
                          }    
                        }
                      })
              }
            })
      
    })
}

