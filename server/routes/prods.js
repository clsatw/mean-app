"use strict";
/*
///<reference path='node.d.ts' />
///<reference path='express.d.ts' />
*/
exports.__esModule = true;
var express_1 = require("express");
var prods_model_1 = require("../models/prods.model");
// var express = require('express');
// returens router instanace which can be mounted as a middleware
// var router = express.Router();
var router = express_1.Router();
/* import * as Hero from '../src/app/hero.ts'
var bodyParser = require('body-parser');
var parseUrlEncoded = bodyParser.urlencoded({
  extended: false
});
*/
/* GET api listing. */
router.get('/', function (req, res) {
    res.send('prods works');
});
// the root path relative to the path where it's mounted.
router.route('/hero')
    .get(function (req, res) {
    console.log('get prod');
    prods_model_1["default"].find({})
        .then(function (data) {
        res.status(200).json(data);
    })["catch"](function (err) {
        res.sendStatus(500).send(err);
    });
})
    .post(function (req, res) {
    // create a new instance of the user model
    // it should be req.body not req.data as there is no data property in req object
    // res.send('prods/post works');
    var data = new prods_model_1["default"](req.body); // Prods is a schema constructor
    // save the data received
    data.save(function (err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500).send(err);
        }
        else {
            // give some success message
            // console.log(data);
            res.status(201).json(data);
        }
    });
});
// on accessing user Route by id
router.route('/hero/:id')
    .get(function (req, res) {
    console.log(req.params.id);
    prods_model_1["default"].findById(req.params.id, function (err, data) {
        if (err) {
            return res.sendStatus(500).send(err);
        }
        else {
            //console.dir(data);
            res.status(200).json(data);
        }
    });
})
    .put(function (req, res) {
    prods_model_1["default"].findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        console.log(req.body);
        if (err) {
            res.sendStatus(500).send(err);
        }
        else
            return res.status(200).json(post);
    });
})["delete"](function (req, res) {
    // const slug: string = req.params.slug;
    // console.log(req.params.slug);
    prods_model_1["default"].findOneAndRemove({ _id: req.params.id }, function (err, data) {
        // Prods.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err)
            return res.sendStatus(500).send(err);
        else
            // give some success message
            //res.sendStatus(200);
            return res.json(true);
    });
});
// exports the router as a Node module
exports["default"] = router;
