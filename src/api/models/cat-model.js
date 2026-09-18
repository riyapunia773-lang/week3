const pool = require('../../utils/database');

const getAllCats = async () => {
  const [rows] = await pool.execute(`
    SELECT Cats.*, Users.name AS owner_name
    FROM Cats
    LEFT JOIN Users ON Cats.owner = Users.user_id
  `);

  return rows;
};

const getCatById = async (id) => {
  const [rows] = await pool.execute(
    `SELECT Cats.*, Users.name AS owner_name
     FROM Cats
     LEFT JOIN Users ON Cats.owner = Users.user_id
     WHERE Cats.cat_id = ?`,
    [id]
  );

  return rows[0];
};

const addCat = async (cat) => {
  const [result] = await pool.execute(
    'INSERT INTO Cats (name, filename, owner) VALUES (?, ?, ?)',
    [cat.name, cat.filename, cat.owner]
  );

  return result.insertId;
};

const updateCat = async (id, cat) => {
  const [result] = await pool.execute(
    'UPDATE Cats SET name = ?, owner = ? WHERE cat_id = ?',
    [cat.name, cat.owner, id]
  );

  return result.affectedRows;
};

const deleteCat = async (id) => {
  const [result] = await pool.execute(
    'DELETE FROM Cats WHERE cat_id = ?',
    [id]
  );

  return result.affectedRows;
};
const getCatsByUser = async (userId) => {
  const [rows] = await pool.execute(
    `SELECT Cats.*, Users.name AS owner_name
     FROM Cats
     LEFT JOIN Users ON Cats.owner = Users.user_id
     WHERE Cats.owner = ?`,
    [userId]
  );

  return rows;
};

module.exports = {
  getAllCats,
  getCatById,
  addCat,
  updateCat,
  deleteCat,
  getCatsByUser
};