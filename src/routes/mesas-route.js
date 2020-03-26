'user strict'

const express = require('express');
const router = express.Router();
const controllerMesas = require('../controllers/mesas-controller');

router.get('/', controllerMesas.get);
router.post('/', controllerMesas.post);
router.put('/', controllerMesas.put);
router.delete('/', controllerMesas.delete);


module.exports = router;