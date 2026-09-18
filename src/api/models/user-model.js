const pool = require('../../utils/database');

const getAllUsers = async () => {
  const [rows] = await pool.execute('SELECT * FROM Users');
  return rows;
};

const getUserById = async (id) => {
  const [rows] = await pool.execute(
    'SELECT * FROM Users WHERE user_id = ?',
    [id]
  );
  return rows[0];
};

const addUser = async (user) => {
  const [result] = await pool.execute(
    'INSERT INTO Users (name, email) VALUES (?, ?)',
    [user.name, user.email]
  );
  return result.insertId;
};

const updateUser = async (id, user) => {
  const [result] = await pool.execute(
    'UPDATE Users SET name = ?, email = ? WHERE user_id = ?',
    [user.name, user.email, id]
  );
  return result.affectedRows;
};

const deleteUser = async (id) => {
  const [result] = await pool.execute(
    'DELETE FROM Users WHERE user_id = ?',
    [id]
  );
  return result.affectedRows;
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
};