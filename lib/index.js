exports = module.exports = function (txn, res, params) {
  if (params.error) {
    switch (params.error) {
    case 'invalid_request':
    case 'invalid_scope':
    case 'invalid_request_uri':     // OpenID Connect
    case 'invalid_request_object':  // OpenID Connect
      res.status(400);
      break;
    case 'unauthorized_client':
    case 'access_denied':
    case 'interaction_required':
    case 'login_required':
    case 'account_selection_required':
    case 'consent_required':
      res.status(403);
      break;
    case 'unsupported_response_type':
    case 'request_not_supported':       // OpenID Connect
    case 'request_uri_not_supported':   // OpenID Connect
    case 'registration_not_supported':  // OpenID Connect
      res.status(501);
      break;
    case 'temporarily_unavailable':
      res.status(503);
      break;
    default:
      res.status(500);
      break;
    }
  }

  // TODO: Set status code appropriately
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-store');
  res.setHeader('Pragma', 'no-cache');
  
  console.log('RESPONSE MODE IFRAME!');
  
  // TODO: Add any extra stuff from txn expected by idpiframe
  
  return res.end(JSON.stringify(params));
};
