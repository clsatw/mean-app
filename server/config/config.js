"use strict";
exports.__esModule = true;
// set NODE_ENV environment variable at cmd prompt. e.g., set NODE_ENV = development
var envDir = process.env.NODE_ENV || 'development';
var development_1 = require("./env/development");
exports["default"] = development_1["default"];
