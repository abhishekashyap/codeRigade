const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const { addUser, removeUser, findUser, usersInRoom } = require("./users");

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to CodeRigade server</h1>");
});

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    console.log("User has joined");
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) {
      return callback(error);
    } else {
      socket.join(user.room);
      console.log("user id", socket.id);

      // For notifications
      socket.broadcast.to(user.room).emit("notification", {
        text: `${user.name} has joined!`,
        type: "connect",
      });

      io.to(user.room).emit("roomData", {
        room: user.room,
        users: usersInRoom(user.room),
      });

      callback();
    }
  });

  socket.on("sendText", (text) => {
    const user = findUser(socket.id);
    console.log(text);
    socket.broadcast.to(user.room).emit("text", text);
  });

  socket.on("sendModeValue", (mode) => {
    const user = findUser(socket.id);
    socket.broadcast.to(user.room).emit("changeMode", mode);
  });

  socket.on("sendThemeValue", (theme) => {
    const user = findUser(socket.id);
    console.log("user room code", user.room);
    socket.broadcast.to(user.room).emit("changeTheme", theme);
  });

  socket.on("disconnect", () => {
    console.log("User has disconnected");
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("notification", {
        text: `${user.name} has left`,
        type: "disconnect",
      });

      io.to(user.room).emit("roomData", {
        room: user.room,
        users: usersInRoom(user.room),
      });
    }
  });
});

http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
