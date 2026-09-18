const getCats = (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Kitty'
    },
    {
      id: 2,
      name: 'Mittens'
    }
  ]);
};

const getCatById = (req, res) => {
  const id = req.params.id;

  res.json({
    id: id,
    name: 'Kitty'
  });
};

const addCat = (req, res) => {
  const newCat = req.body;

  res.status(201).json({
    message: 'Cat added',
    cat: newCat
  });
};

const updateCat = (req, res) => {
  const id = req.params.id;
  const updatedCat = req.body;

  res.json({
    message: 'Cat updated',
    id: id,
    cat: updatedCat
  });
};

const deleteCat = (req, res) => {
  const id = req.params.id;

  res.json({
    message: 'Cat deleted',
    id: id
  });
};

module.exports = {
  getCats,
  getCatById,
  addCat,
  updateCat,
  deleteCat
};