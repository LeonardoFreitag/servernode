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
        db.query('SELECT * FROM v_mesas', function(err, result) {
            // IMPORTANT: close the connection
            res.status(200).send(result)
            db.detach();
        });
     
    });    

}

exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};

exports.put = (req, res, next) => {
    let mesa = req.body.mesa;
    let atende = req.body.codAtendente;
    console.log('mesa ' + mesa);
    console.log('atende ' + atende);
    Firebird.attach(options, function(err, db) {
 
        if (err)
            throw err;
     
        // db = DATABASE
        db.query('SELECT oretorno FROM POCKET_INSERT_MESA(?, ?)', [atende, mesa], function(err, result) {
            // IMPORTANT: close the connection
            if (err) {
                res.status(400).send(err);
                console.log(err);
            }
            console.log(result);
            res.status(200).send(result);
            db.detach();
        });
     
    });    
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};