var restify = require('restify');

var server = restify.createServer({
 name:'migoservices'
});

server.use(restify.bodyParser());

var send = function(req, resp, other){
 console.log(req.params);
 next();
}

server.get('/', function(req, resp, other){ resp.end('migoservices'); });

server.on('listening', function(){
  console.log('%s listening at %s', server.name, server.url);
});

process.on('uncaughtException', function(error){
 if(error.errno === 'EADDRINUSE')
  console.log('need to kill node process');
 
 process.exit(1);
});

server.listen(8080);
