var AuthorizationError = require('../errors/authorizationerror');

module.exports = function() {
  
  function request(req) {
    var q = req.query
      , ext = {};
    
    if (req.iframerpc) {
      if (!q.origin) { throw new AuthorizationError('Missing required parameter: origin', 'invalid_request'); }
      if (!q.login_hint) { throw new AuthorizationError('Missing required parameter: login_hint', 'invalid_request'); }
      
      ext.responseMode = '.iframerpc';
      ext.origin = q.origin;
      ext.loginHint = q.login_hint;
    }
    
    return ext;
  }
  
  var mod = {};
  mod.name = '*';
  mod.request = request;
  return mod;
}
