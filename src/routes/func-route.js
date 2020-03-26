'user strict'

const express = require('express');
const router = express.Router();
const controllerFunc = require('../controllers/func-controller');

router.get('/', controllerFunc.get);
router.post('/', controllerFunc.post);
router.put('/:id', controllerFunc.put);
router.delete('/', controllerFunc.delete);


module.exports = router;