"use strict";
exports.__esModule = true;
var express_1 = require("express");
// import User from '../models/user.model';
// declare axios for making http requests
var axios_1 = require("axios");
var API = 'https://jsonplaceholder.typicode.com';
var router = express_1.Router();
/* GET api listing. */
router.get('/', function (req, res) {
    res.send('api works');
});
// Get all posts
router.get('/posts', function (req, res) {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    axios_1["default"].get(API + "/posts")
        .then(function (posts) {
        res.status(200).json(posts.data);
    })["catch"](function (error) {
        res.status(500).send(error);
    });
});
exports["default"] = router;
