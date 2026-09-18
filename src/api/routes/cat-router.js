const express = require('express');
const catController = require('../controllers/cat-controller');
const router = express.Router();

router.get('/', catController.getCats);
router.get('/:id', catController.getCatById);
router.post('/', catController.addCat);
router.put('/:id', catController.updateCat);
router.delete('/:id', catController.deleteCat);
module.exports = router;