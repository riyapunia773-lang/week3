const userModel = require('../models/user-model');
const catModel = require('../models/cat-model');
const getUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Database error'});
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userModel.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Database error'});
  }
};

const addUser = async (req, res) => {
  try {
    const id = await userModel.addUser(req.body);

    res.status(201).json({
      message: 'User added',
      user_id: id
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Database error'});
  }
};

const updateUser = async (req, res) => {
  try {
    await userModel.updateUser(req.params.id, req.body);

    res.json({
      message: 'User updated'
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Database error'});
  }
};

const deleteUser = async (req, res) => {
  try {
    await userModel.deleteUser(req.params.id);

    res.json({
      message: 'User deleted'
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Database error'});
  }
};
const getUserCats = async (req, res) => {
  try {
    const cats = await catModel.getCatsByUser(req.params.id);
    res.json(cats);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Database error'});
  }
};
module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  getUserCats
};