/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/
//var dispatcher = require('httpdispatcher');
//var request = require('request');

var requestHandler = function(request, response) {

  // try {
  //   //log the request on console
  //   console.log(request.url);
  //   //Disptach
  //   dispatcher.dispatch(request, response);
  // } catch (err) {
  //   console.log(err);
  // }
//https://blog.kevinchisholm.com/javascript/node-js/making-a-simple-http-server-with-node-js-part-i/
  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.
  console.log('Serving request type ' + request.method + ' for url ' + request.url);

  // The outgoing status.
  var statusCode = 200;



  var defaultCorsHeaders = {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10 // Seconds.
  };
  // See the note below about CORS headers.
  var headers = defaultCorsHeaders;

  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or HTML.
  headers['Content-Type'] = 'text/plain';

  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  //response.writeHead(statusCode, headers);

  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.
  //response.end('Hello, World!');

  if (request.method === 'GET' && request.url === '/classes/messages') {
    console.log(request);
    var headers = request.headers;
    var method = request.method;
    var url = request.url;
    var results = [];

    //tuesday

    request.on('error', function(err) {
      console.error(err);
    }).on('data', function(chunk) {
      results.push(chuck);
    }).on('end', function() {
      results = Buffer.concat(results).toString();
    });

  }

  repsonse.on('error', function(err) {
    console.error(err);
  });

  reponse.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');

  var responseBody = {
    headers: headers, 
    method: request.method,
    url: request.url,
    body: results
  };

  response.wrtie(JSON.stringify(responseBody));
  response.end();

};



  
// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.

exports.requestHandler = requestHandler;
//   request.setEncoding('utf8');
  //   request.on('data', function(data) {
  //     console.log(data);
  //     results.push(data);
  //     // response.end(JSON.stringify(data));

  //   // }).on('end', function() {
  //     console.log(results);
  //     response.writeHead(statusCode, headers);
  //     var responseBody = {
  //       headers: headers,
  //       method: method,
  //       url: url,
  //       results: results
  //     };
  //     response.end(JSON.stringify(responseBody));
  //   });

  // } 

  // else if (request.method === 'POST' && request.url === '/send'){
  //   request.on('data', function(data) {

  //     response.end('data received!')
  //   })
  // } 

  // else {
  //   response.statusCode = 404;
  //   response.end('error');
  // }

  // var postData = querystring.stringify({
  //   'msg' : 'Hello World!'
  // });

  // var options = {
  //   hostname: 'http://127.0.0.1',
  //   port: 3000,
  //   path: '/classes/messages',
  //   method: 'GET',
  //   headers: headers
  // };

  // var req = http.request(options, function(res) {
  //   console.log('STATUS: ' + res.statusCode);
  //   console.log('HEADERS: ' + JSON.stringify(res.headers));
  //   res.setEncoding('utf8');
  //   res.on('data', function(data) {
  //     console.log('BODY: ' + data);
  //   });
  //   res.on('end', function() {
  //     console.log('No more data in response');
  //   });
  // });

  // req.on('error', function(e) {
  //   console.log('problem with request: ' + e.message);
  // });

  // req.write(postData);
  // req.end();



  // dispatcher.onGet('/classes/messages', function(req, res) {
  //   var dummyData = {
  //     results: []
  //   };
  //   res.writeHead(statusCode, headers);
  //   res.end( JSON.stringify(dummyData) );
  // });

  // dispatcher.onPost('/classes/messages', function(req, res) {
  //   res.writeHead(statusCode, headers);
  //   res.end('Got Post Data');
  // });
