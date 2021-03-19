require("dotenv").config();
const express = require("express");
const http = require("http");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  dir: "."
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("*", handle);

  http.createServer(server).listen(3000, () => {
    console.log(`listening on port 3000`);
  })
});
