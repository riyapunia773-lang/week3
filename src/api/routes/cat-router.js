const express = require('express');

const upload = require('../../middlewares/upload');
const createThumbnail = require('../../middlewares/thumbnail');

const catController = require('../controllers/cat-controller');

const router = express.Router();

router.get('/', catController.getCats);

router.get('/:id', catController.getCatById);

router.post('/', upload.single('cat'), createThumbnail, catController.addCat);

router.put('/:id', catController.updateCat);

router.delete('/:id', catController.deleteCat);

module.exports = router;