const { log } = require("console");
const { Socket } = require("dgram");
const { render } = require("ejs");
const express = require("express");

const http = require("http");
const SocketIo = require("socket.io");


const app = express();
const server = http.createServer(app)
const io = new SocketIo.Server(server);

app.set("view engine", "ejs")

io.on("connection", (Socket)=>{
    console.log ("user connected")

    Socket.on ("message",(msg) => {
      io.emit("message", "hello mr. surver")
    })
})

app.get("/"  ,(req,res) => {
res.render("index")
});


server.listen(3000 , () =>{
    console.log("server running on port 3000")
});