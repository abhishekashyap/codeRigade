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
  socket.on("join", ({ name, code }, callback) => {
    console.log("User has joined");
    const { error, user } = addUser({ id: socket.id, name, code });

    if (error) {
      return callback(error);
    } else {
      socket.broadcast.to(user.code).emit("text", {
        user: "admin",
        text: `${user.name} has joined!`,
      });

      socket.join(user.code);

      io.to(user.code).emit("roomData", {
        room: user.code,
        users: usersInRoom(user.code),
      });

      callback();
    }
  });

  socket.on("sendText", (text) => {
    const user = findUser(socket.id);
    console.log(text);
    io.to(user.room).emit("text", { user: user.name, text: text });
  });

  socket.on("disconnect", () => {
    console.log("User has disconnected");
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.code).emit("text", {
        user: "admin",
        text: `${user.name} has left`,
      });
    }
  });
});

http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
