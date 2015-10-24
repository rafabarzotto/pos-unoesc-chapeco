var http = require('http');
var fs = require('fs');

var index = fs.readFileSync('index.html');


http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	//res.write('<h1> FOI FTW!!!!! </h1>');
	res.end(index);
}).listen(3000);
console.log('Server running at http://localhost:3000/');