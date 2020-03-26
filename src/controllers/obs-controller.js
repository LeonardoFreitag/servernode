'use strict';
const Firebird = require("node-firebird");
const config = require('../config');
var options = {};
options.host = '127.0.0.1';
options.port = 3050;
options.database = config.connectionString;
options.user = 'SYSDBA';
options.password = 'masterkey';
options.lowercase_keys = false;
options.role = null;
options.pageSize = 4096;


exports.get = (req, res, next) => {
    Firebird.attach(options, function(err, db) {
 
        if (err)
            throw err;
     
        // db = DATABASE
        db.query('SELECT * FROM v_obs', function(err, result) {
            // IMPORTANT: close the connection
            res.status(200).send(result);
            db.detach();
        });
     
    });    

}

exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({ 
        id: id, 
        item: req.body 
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};