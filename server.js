var http = require("http");

var server = http.createServer(function(req,res){
	console.log("客户端和服务器已经建立通讯"+req.url);
	res.writeHead(200,{"Content-type":"text/plain"})
	res.end("hey Nodejs");
});

server.listen(3000,"127.0.0.1");

console.log("server is running...");

