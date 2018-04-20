"use strict";
// /<reference path='node.d.ts' />
exports.__esModule = true;
// Get dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");
var helmet = require("helmet");
var compression = require("compression");
// Morgan (logger)
var morgan = require("morgan");
var api_1 = require("./routes/api");
var prods_1 = require("./routes/prods");
// Server class
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        // set up mongoose
        var MONGO_URI = 'mongodb://ajoan.com/quickstar';
        // mongoose.connect(MONGO_URI || process.env.MONGODB_URI);
        // mongoose.connect(config.db);
        //config 
        // this.app.use()
        // Parsers for POST data
        this.app.use(helmet());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(morgan('dev'));
        this.app.use(express.static(path.join(__dirname, 'server')));
        this.app.use(compression());
        this.app.use(cors());
    };
    // routes
    Server.prototype.routes = function () {
        // let router: express.Router;
        // router = express.Router();
        this.app.use('/api/prods', prods_1["default"]);
        this.app.use('/api/axios', api_1["default"]);
    };
    return Server;
}());
/**
 * Get port from environment and store in Express.
 */
var port = process.env.PORT || '80';
var app = new Server().app;
// Catch all other routes and return the index file
app.all('*', function (req, res, next) {
    // res.sendFile(path.join(__dirname, './src/index.html'));
    console.log('dir :', path.resolve(__dirname));
    res.sendFile(path.resolve(__dirname, '../../src/index.html'));
});
app.set('port', port);
app.listen(port, function () {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname +
        '\nprocess.cwd = ' + process.cwd());
});
// export default new Server().app; 
/*
mongoose.connect(config.db, {
  safe: true
}, function (err) {
  if (err) {
    console.error('connection error', err);
  } else {
    console.log('connection successful');
  }
});
*/
// Point static path to dist
