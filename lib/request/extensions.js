var AuthorizationError = require('../errors/authorizationerror');

module.exports = function() {
  
  function request(req) {
    var q = req.query
      , ext = {};
    
    if (req.iframerpc) {
      if (!q.origin) { throw new AuthorizationError('Missing required parameter: origin', 'invalid_request'); }
      
      ext.responseMode = '.iframerpc';
      ext.origin = q.origin;
    }
    
    return ext;
  }
  
  var mod = {};
  mod.name = '*';
  mod.request = request;
  return mod;
}
