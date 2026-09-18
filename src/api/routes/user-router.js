const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Riya'
    },
    {
      id: 2,
      name: 'Alex'
    }
  ]);
});
router.get('/:id', (req, res) => {
  const id = req.params.id;

  res.json({
    id: id,
    name: 'Riya'
  });
});
router.post('/', (req, res) => {
  const newUser = req.body;

  res.status(201).json({
    message: 'User added',
    user: newUser
  });
});
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;

  res.json({
    message: 'User updated',
    id: id,
    user: updatedUser
  });
});
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  res.json({
    message: 'User deleted',
    id: id
  });
});
module.exports = router;