var express = require("express");

var server = express();

server.get("/", (req, res, next) => {
    console.log("some one get menu");
    res.send("menu: what do you want? food or water");
})

server.listen(3000, () => {
    console.log("server is running on port 3000");
})
