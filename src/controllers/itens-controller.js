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
    Firebird.attach(options, function (err, db) {

        let codigo = req.params.codigo;
        console.log(codigo);
        if (err)
            throw err;

        // db = DATABASE
        db.query('SELECT * FROM v_itens where codmesa=?', [codigo], function (err, result) {
            // IMPORTANT: close the connection
            res.status(200).send(
                result
            )
            db.detach();
        });

    });

}

exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};

exports.put = (req, res, next) => {

    // console.log(req.body);

    let codMesa = req.body.codMesa;
    let codProduto = req.body.codProduto;
    let qtde = req.body.qtde;
    let obs = req.body.obs;
    let atende = req.body.codAtendente;

    Firebird.attach(options, function (err1, db) {

        if (err1)
            throw err1;

        // db = DATABASE
        db.transaction(Firebird.ISOLATION_READ_COMMITED, function (errt, transaction) {
            transaction.query('SELECT oretorno FROM POCKET_INSERT_PRODUTO(?, ?, ?, ?, ?)',
                [codMesa, codProduto, qtde, obs, atende], function (errq, result) {

                    if (errq) {
                        transaction.rollback();
                        return;
                    };

                    transaction.commit(function (errf) {
                        if (errf) {
                            transaction.rollback();
                            res.status(400).send(err);
                            // console.log(req.body);
                            // console.log(err);
                        }
                        else {
                            db.detach();
                            res.status(200).send(result);
                            // console.log(req.body);
                            // console.log(result);
                        }
                    });
                });
        });
    });
};

exports.putCombine = (req, res, next) => {

    // console.log(req.body);

    let codMesa = req.body.codMesa;
    let codProduto = req.body.codProduto;
    let qtde = req.body.qtde;
    let obs = req.body.obs;
    let atende = req.body.codAtendente;
    let codCombine = req.body.codCombine;

    Firebird.attach(options, function (err1, db) {

        if (err1)
            throw err1;

        // db = DATABASE
        db.transaction(Firebird.ISOLATION_READ_COMMITED, function (errt, transaction) {
            transaction.query('SELECT oretorno FROM POCKET_INSERT_PRODUTO_COMBINE(?, ?, ?, ?, ?, ?)',
                [codMesa, codProduto, qtde, obs, atende, codCombine], function (errq, result) {

                    if (errq) {
                        transaction.rollback();
                        return;
                    };

                    transaction.commit(function (errf) {
                        if (errf) {
                            transaction.rollback();
                            res.status(400).send(err);
                            // console.log(req.body);
                            // console.log(err);
                        }
                        else {
                            db.detach();
                            res.status(200).send(result);
                            // console.log(req.body);
                            // console.log(result);
                        }
                    });
                });
        });
    });
};


exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};