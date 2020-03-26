'user strict'

const express = require('express');
const router = express.Router();
const controllerProducts = require('../controllers/products-controller');

router.get('/', controllerProducts.get);
router.post('/', controllerProducts.post);
router.put('/:id', controllerProducts.put);
router.delete('/', controllerProducts.delete);


module.exports = router;