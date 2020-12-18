var express = require("express");

var server = express();
var PORT = process.env.PORT || 5000

server.get("/", (req, res, next) => {
    console.log("some one get menu");
    res.send("menu: what do you want? food or water");
})

server.listen(PORT, () => {
    console.log("server is running on port 3000");
})
