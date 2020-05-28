const users = [];

const addUser = ({ id, name, roomcode }) => {
  if (name) {
    // If name is defined, add the user
    name = name.trim();
    const user = { id, name, roomcode };
    users.push(user);
    return { user };
  } else {
    return { error: "Enter a valid name" };
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
