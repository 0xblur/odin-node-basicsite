const http = require("node:http");
const fs = require("node:fs/promises");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		const serveIndex = async () => {
			const page = await fs.readFile("./index.html", { encoding: "utf8" });
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(page);
			res.end();
		};
		serveIndex();
	} else if (req.url === "/about") {
		const serveAbout = async () => {
			const page = await fs.readFile("./about.html", { encoding: "utf8" });
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(page);
			res.end();
		};
		serveAbout();
	} else if (req.url === "/contact-me") {
		const serveContactMe = async () => {
			const page = await fs.readFile("./contact-me.html", { encoding: "utf8" });
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(page);
			res.end();
		};
		serveContactMe();
	} else {
		const serveErrorPage = async () => {
			const page = await fs.readFile("./404.html", { encoding: "utf8" });
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(page);
			res.end();
		};
		serveErrorPage();
	}
});

server.listen(8000);
