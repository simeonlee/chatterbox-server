var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

var results = [];
var requestHandler = function(request, response) {
  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  var headers = defaultCorsHeaders;
  var method = request.method;
  var url = request.url;
  headers['Content-Type'] = 'text/plain';

  if (request.url === '/classes/messages') {
    if (request.method === 'POST') {
      var statusCode = 201;
      request.on('data', function(data) {
        results.push(JSON.parse(data.toString('utf8')));
      });
      request.on('end', function() {
        response.writeHead(statusCode, headers);
        var responseBody = {
          headers: headers,
          method: method,
          url: url,
          results: results
        };
        response.end(JSON.stringify(responseBody));
      });
    } else if (request.method === 'GET') {
      var statusCode = 200;
      response.writeHead(statusCode, headers);
      var responseBody = {
        headers: headers,
        method: method,
        url: url,
        results: results
      };
      response.end(JSON.stringify(responseBody));
    }
  } else {
    response.statusCode = 404;
    response.end();
  }
};
exports.requestHandler = requestHandler;