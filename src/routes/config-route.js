'user strict'

const express = require('express');
const router = express.Router();
const controllerConfig = require('../controllers/config-controller');

router.get('/', controllerConfig.get);
router.post('/', controllerConfig.post);
router.put('/:id', controllerConfig.put);
router.delete('/', controllerConfig.delete);


module.exports = router;