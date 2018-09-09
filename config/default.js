const config = {
  // 启动端口
  port: 5001,
  // 数据库配置
  database: {
    DATABASE: 'wechatsql',
    USERNAME: 'root',
    PASSWORD: 'jiale',
    PORT: '3306',
    HOST: 'localhost'
  },
  wechat: {
    app_id:'wx377afc7096874b4d',
    secret_id:'4d2009543f9b262facbed8b57f10cce9',
    wechat_grant_type:'authorization_code',
    wechat_code_to_session_url:'https://api.weixin.qq.com/sns/jscode2session'
  }
}

module.exports = config