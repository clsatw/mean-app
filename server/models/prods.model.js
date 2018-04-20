"use strict";
exports.__esModule = true;
// var mongoose = require('mongoose');
var mongoose_1 = require("mongoose");
var prodSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        "default": ''
    },
    type: {
        type: String,
        required: true,
        "default": ''
    },
    price: {
        type: String,
        "default": ''
    },
    imgUrl: {
        type: String,
        "default": ''
    }
}, { versionKey: false });
// order schema should be created late on for order management
// use the schema instance to define your Prods model
/* Mongoose automatically looks for the plural version of your model name. Thus, for the example above, the model user is for the users collection in the database.
** declare a model called Prods which has schema prodSchema
 */
exports["default"] = mongoose_1.model('Prods', prodSchema);
