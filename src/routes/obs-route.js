'user strict'

const express = require('express');
const router = express.Router();
const controllerObs = require('../controllers/obs-controller');

router.get('/', controllerObs.get);
router.post('/', controllerObs.post);
router.put('/:id', controllerObs.put);
router.delete('/', controllerObs.delete);


module.exports = router;