const catModel = require('../models/cat-model');

const getCats = async (req, res) => {
  try {
    const cats = await catModel.getAllCats();
    res.json(cats);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Database error'});
  }
};

const getCatById = async (req, res) => {
  try {
    const cat = await catModel.getCatById(req.params.id);
    res.json(cat);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Database error'});
  }
};

const addCat = async (req, res) => {
  try {
    const cat = {
      name: req.body.name,
      owner: req.body.owner,
      filename: req.file ? req.file.filename : null
    };

    const id = await catModel.addCat(cat);

    res.status(201).json({
      message: 'Cat added',
      cat_id: id,
      thumbnail: req.file ? req.file.thumbnail : null
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Database error'});
  }
};

const updateCat = async (req, res) => {
  try {
    await catModel.updateCat(req.params.id, req.body);

    res.json({
      message: 'Cat updated'
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Database error'});
  }
};

const deleteCat = async (req, res) => {
  try {
    await catModel.deleteCat(req.params.id);

    res.json({
      message: 'Cat deleted'
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Database error'});
  }
};

module.exports = {
  getCats,
  getCatById,
  addCat,
  updateCat,
  deleteCat
};