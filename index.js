import express from "express";
import createError from "http-errors";
import path from "node:path";

const app = express();
app.get("/", (req, res, next) => {
	res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/about", (req, res, next) => {
	res.sendFile(path.join(__dirname, "about.html"));
});
app.get("/contact-me", (req, res, next) => {
	res.sendFile(path.join(__dirname, "contact-me.html"));
});

app.all("*", (req, res, next) => {
	res.status(404).send("<h1>404: Not found!</h1>");
	next(createError("404"));
});

app.listen(8000);
