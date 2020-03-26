'user strict'

const express = require('express');
const router = express.Router();
const controllerItens = require('../controllers/itens-controller');

router.get('/:codigo', controllerItens.get);
router.post('/', controllerItens.post);
router.put('/', controllerItens.put);
router.put('/combine/', controllerItens.putCombine);
router.delete('/', controllerItens.delete);


module.exports = router;