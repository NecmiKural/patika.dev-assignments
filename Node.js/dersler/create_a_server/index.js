const http = require('http');

const server = http.createserver((req, res) => {

	const url = req.url;
	console.log(url);

	if(url === "/") {
		res.writeHead(200, {"Content-Type":"text/html"});
		res.write("<h1>index</h1>");
	} else if (url === "about") {
		res.write("about us");
	} else {
		res.write("404");
	}

	console.log("istek gönderildi");
	res.write("sa");
	res.end();
});

const port= 3000;

server.listen(port, ()=>{
	console.log(`sunucu port ${port}'de başladı`);
});

