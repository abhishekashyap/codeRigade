const users = [];

const addUser = ({ id, username, roomcode }) => {
  username = username.trim();

  let userExists = users.find(
    (user) =>
      user.username.toLowercase() === username.toLowercase() &&
      user.roomcode === roomcode
  );

  if (userExists) {
    return { error: "Username already exists" };
  } else {
    // Add new user
    const user = { id, username, roomcode };
    users.push(user);
    return { user };
  }
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const findUser = (id) => users.find((user) => user.id === id);

const usersInRoom = (roomcode) =>
  users.filter((user) => user.roomcode === roomcode);

module.exports = { addUser, removeUser, findUser, usersInRoom };
