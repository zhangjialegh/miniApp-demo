/**
 * Created by fujunou on 2015/3/6.
 */

var axios = require('axios');
var config = require('../config/default');
var WXBizDataCrypt = require('./WXBizDataCrypt')
var crypto=require("crypto");
const NODE_ENV = process.env.NODE_ENV === 'dev' ? 'dev' : 'prod'
module.exports = {
    extend: function(target, source, flag) {
        for(var key in source) {
            if(source.hasOwnProperty(key))
                flag ?
                    (target[key] = source[key]) :
                    (target[key] === void 0 && (target[key] = source[key]));
        }
        return target;
    },
    code_to_session: function(cls,code) {
        let querystring = {
            'appid': config[NODE_ENV].wechat.app_id,
            'secret': config[NODE_ENV].wechat.secret_id,
            'js_code': code,
            'grant_type': config[NODE_ENV].wechat.wechat_grant_type
        }
       return axios.get(config[NODE_ENV].wechat.wechat_code_to_session_url,{
            params: querystring
        })
    },
    get_wechat_user_info: function (cls,res) {
        var appId = config[NODE_ENV].wechat.app_id
        var sessionKey = res.data.session_key
        var encryptedData = cls.encryptedData
        var iv = cls.iv
        var pc = new WXBizDataCrypt(appId, sessionKey)
        return data = pc.decryptData(encryptedData, iv)
    },
    createToken:function(obj,timeout){
        var obj2={
            data:obj,//payload
            created:parseInt(Date.now()/1000),//token生成的时间的，单位秒
            exp:parseInt(timeout)||10//token有效期
        };

        //payload信息
        var base64Str=Buffer.from(JSON.stringify(obj2),"utf8").toString("base64");

        //添加签名，防篡改
        var secret="hel.h-five.com";
        var hash=crypto.createHmac('sha256',secret);
            hash.update(base64Str);
        var signature=hash.digest('base64');
        return  base64Str+"."+signature;
    },
    decodeToken:function(token){

        var decArr=token.split(".");
        if(decArr.length<2){
            //token不合法
            return false;
        }

        var payload={};
        //将payload json字符串 解析为对象
        try{
            payload=JSON.parse(Buffer.from(decArr[0],"base64").toString("utf8"));
        }catch(e){
            return false;
        }

        //检验签名
        var secret="hel.h-five.com";        
        var hash=crypto.createHmac('sha256',secret);
            hash.update(decArr[0]);
        var checkSignature=hash.digest('base64');

        return {
            payload:payload,
            signature:decArr[1],
            checkSignature:checkSignature
        }
    },
    checkToken:function(token){
        var resDecode=this.decodeToken(token);
        if(!resDecode){

            return false;
        }

        //是否过期
        var expState=(parseInt(Date.now()/1000)-parseInt(resDecode.payload.created))>parseInt(resDecode.payload.exp)?false:true;
        if(resDecode.signature===resDecode.checkSignature&&expState){

            return true;
        }

        return false;
    }      
}