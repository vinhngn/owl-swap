const express = require("express");
const app = express();
app.use(express.static("public"));
const expressServer = app.listen(3000);

const socketio = require("socket.io"); // Calling the socket.io
const io = socketio(expressServer, {}); // Initialize the socket.io server
console.log("connected to the chat server");
io.on("connect", (socket) => {
  // console.log(socket.handshake.query.t); //thats how you get the token
  console.log(socket.id, "has joined our server!");
  socket.on("messageFromClientToServer", (newMessage) => {
    console.log(newMessage + " from server");
    io.emit("messageFromServerToAllClients", newMessage);
  });
}); //Adding events

// require() -> methods used to call the libraries
// io.on methods activates when some one connects to the server, listens to events
// .emit() sends back events 2args, event name and data
// socket.on or socket.emit works on one particular socket
// io.on or io.emit works on all the sockets
