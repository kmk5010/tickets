const decode = require('jwt-decode')
module.exports = {
  userInfo (token) {
    var decoded = decode(token)
    var userInfo = {
      username: decoded.username,
      roles: decoded.roles
    }
    return userInfo
  }
}
