const users = [];

const addUser = ({ id, name, roomcode }) => {
  name = name.trim();

  // let userExists = users.find(
  //   (user) =>
  //     user.name.toLowercase() === name.toLowercase() && user.roomcode === roomcode
  // );

  let userExists = false;

  if (userExists) {
    return { error: "name already exists" };
  } else {
    // Add new user
    const user = { id, name, roomcode };
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
