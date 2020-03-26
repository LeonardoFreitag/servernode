'user strict'

const express = require('express');
const router = express.Router();

route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Mettre API",
        version: "0.0.2"
    });
});


module.exports = router;