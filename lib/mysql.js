const Model = require('../model')
// let createTable = ( sql ) => {
//   return query( sql, [] )
// }

// 建表
// createTable(users)
// createTable(posts)
// createTable(comment)

// 注册用户
exports.insertData = ( value ) => {
  return Model.User.create({
    name: value[0],
    pass: value[1],
    avator: value[2],
    moment: value[3]
  })
}
// 删除用户
// exports.deleteUserData = ( name ) => {
//   let _sql = `delete from users where name="${name}";`
//   return query( _sql )
// }
// 查找用户
// exports.findUserData = ( name ) => {
//   let _sql = `select * from users where name="${name}";`
//   return query( _sql )
// }
exports.findUserData = ( name ) => {
  return Model.User.findAll({
    where: {name: name}
  })
}
// 发表文章
// exports.insertPost = ( value ) => {
//   let _sql = "insert into posts set name=?,title=?,content=?,md=?,uid=?,moment=?,avator=?;"
//   return query( _sql, value )
// }
exports.insertPost = ( value ) => {
  console.log(value,'inserpost');
  
  return Model.Post.create({
    name: value[0],
    title: value[1],
    content: value[2],
    md: value[3],
    uid: value[4],
    moment: value[5],
    avator: value[6]
  })
}
// 更新文章评论数
// exports.updatePostComment = ( value ) => {
//   let _sql = "update posts set comments=? where id=?"
//   return query( _sql, value )
// }

// 更新浏览数
// exports.updatePostPv = ( value ) => {
//   let _sql = "update posts set pv=? where id=?"
//   return query( _sql, value )
// }

// 发表评论
// exports.insertComment = ( value ) => {
//   let _sql = "insert into comment set name=?,content=?,moment=?,postid=?,avator=?;"
//   return query( _sql, value )
// }
// 通过名字查找用户
// exports.findDataByName =  ( name ) => {
//   let _sql = `select * from users where name="${name}";`
//   return query( _sql)
// }
exports.findDataByName = ( name ) => {
  return Model.User.findAll({
    where: {name: name}
  })
}
// 通过文章的名字查找用户
// exports.findDataByUser =  ( name ) => {
//   let _sql = `select * from posts where name="${name}";`
//   return query( _sql)
// }
exports.findDataByUser = ( name ) => {
  return Model.Post.findOne({
    where: {name: name}
  })
}
// 通过文章id查找
// exports.findDataById =  ( id ) => {
//   let _sql = `select * from posts where id="${id}";`
//   return query( _sql)
// }
exports.findDataById = ( id ) => {
  return Model.Post.findOne({
    where: {id: id}
  })
}
// // 通过文章id查找
// exports.findCommentById =  ( id ) => {
//   let _sql = `select * from comment where postid="${id}";`
//   return query( _sql)
// }
// // 通过评论id查找
// exports.findComment =  ( id ) => {
//   let _sql = `select * from comment where id="${id}";`
//   return query( _sql)
// }

// // 查询所有文章
// exports.findAllPost =  () => {
//   let _sql = ` select * from posts;`
//   return query( _sql)
// }
exports.findAllPost = ( page ) => {
  return Model.Post.findAll()
}
// // 查询分页文章
// exports.findPostByPage =  ( page ) => {
//   let _sql = ` select * from posts limit ${(page-1)*10},10;`
//   return query( _sql)
// }
exports.findPostByPage = ( page ) => {
  return Model.Post.findAll({
    limit: (page-1)*10
  })
}
// // 查询个人分页文章
// exports.findPostByUserPage =  (name,page) => {
//   let _sql = ` select * from posts where name="${name}" order by id desc limit ${(page-1)*10},10 ;`
//   return query( _sql)
// }
// // 更新修改文章
// exports.updatePost = (values) => {
//   let _sql = `update posts set title=?,content=?,md=? where id=?`
//   return query(_sql,values)
// }
// // 删除文章
// exports.deletePost = (id) => {
//   let _sql = `delete from posts where id = ${id}`
//   return query(_sql)
// }
// // 删除评论
// exports.deleteComment = (id) => {
//   let _sql = `delete from comment where id=${id}`
//   return query(_sql)
// }
// // 删除所有评论
// exports.deleteAllPostComment = (id) => {
//   let _sql = `delete from comment where postid=${id}`
//   return query(_sql)
// }
// // 查找评论数
// exports.findCommentLength = (id) => {
//   let _sql = `select content from comment where postid in (select id from posts where id=${id})`
//   return query(_sql)
// }

// // 滚动无限加载数据
// exports.findPageById = (page) => {
//   let _sql = `select * from posts limit ${(page-1)*5},5;`
//   return query(_sql)
// }
// // 评论分页
// exports.findCommentByPage = (page,postId) => {
//   let _sql = `select * from comment where postid=${postId} order by id desc limit ${(page-1)*10},10;`
//   return query(_sql)
// }



