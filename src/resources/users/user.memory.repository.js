const users = [];

const getAll = async () => users;
const getUserById = async (id) => users.find((item) => item.id === id);

const postUser = async ({ id, name, login, password }) => {
  users.push({ id, name, login, password });
  return { id, name, login, password };
};

const deleteUser = async (id) => {
  const index = users.findIndex((item) => item.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
};

const putUser = async ({ id, name, login, password }) => {
  const index = users.findIndex((item) => item.id === id);

  if (index === -1) return null;
  users[index].name = name;
  users[index].login = login;
  users[index].password = password;
  return { ...users[index] };
};

module.exports = { getAll, postUser, getUserById, deleteUser, putUser };
