const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
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
});
router.get('/:id', (req, res) => {
  const id = req.params.id;

  res.json({
    id: id,
    name: 'Kitty'
  });
});
router.post('/', (req, res) => {
  const newCat = req.body;

  res.status(201).json({
    message: 'Cat added',
    cat: newCat
  });
});
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedCat = req.body;

  res.json({
    message: 'Cat updated',
    id: id,
    cat: updatedCat
  });
});
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  res.json({
    message: 'Cat deleted',
    id: id
  });
});
module.exports = router;