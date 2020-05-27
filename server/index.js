const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const { addUser, removeUser, findUser, usersInRoom } = require("./users");

app.use(cors);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to CodeRigade server</h1>");
});

io.on("connection", (socket) => {
  socket.on("join", ({ username, roomcode }, callback) => {
    const { error, user } = addUser({ id: socket.id, username, roomcode });

    if (error) {
      return callback(error);
    } else {
      socket.broadcast.to(user.roomcode).emit("message", {
        user: "admin",
        text: `${user.username} has joined!`,
      });

      socket.join(user.roomcode);

      io.to(user.roomcode).emit("roomData", {
        room: user.roomcode,
        users: usersInRoom(user.roomcode),
      });

      callback();
    }
  });

  socket.on("disconnect", () => {
    // console.log('User has disconnected')
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.roomcode).emit("message", {
        user: "admin",
        text: `${user.username} has left`,
      });
    }
  });
});

http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
