// /<reference path='node.d.ts' />

// Get dependencies
import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as bodyParser from 'body-parser';
// import * as mongoose from 'mongoose';
const mongoose = require('mongoose');
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as compression from 'compression';
// Morgan (logger)
import * as morgan from 'morgan';

// Get our API routes
import config from'./config/config';
import api from './routes/api';
import prods from'./routes/prods';
import { request } from 'http';
import { global } from '@angular/core/src/util';

// Server class
class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }
  public config() {
    // set up mongoose
    const MONGO_URI = 'mongodb://ajoan.com/quickstar';
    // mongoose.connect(config.db);
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URI || process.env.MONGODB_URI);
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.on('opne', ()=>{
      console.log('yay');
    })

    //config 
    // Parsers for POST data
    this.app.use(helmet());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(morgan('dev'));
    this.app.use(express.static(publicweb);
    // this.app.use(express.static(path.join(__dirname, 'server')));
    this.app.use(compression());
    this.app.use(cors());    
  }

  // routes
  public routes(): void {
    // let router: express.Router;
    // router = express.Router();

    this.app.use('/api/prods', prods);
    this.app.use('/api/axios', api);
  }  
}

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '80';
const app = new Server().app;
// Catch all other routes and return the index file
app.all('*', (req, res, next) => {
  // res.sendFile(path.join(__dirname, './src/index.html'));
  console.log('dir :',  path.resolve(__dirname));
  res.sendFile(path.resolve(__dirname, '../../src/index.html'));
});

// app.set('port', port);
app.listen(port, ()=> {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
                '\n__dirname = ' + __dirname +
                '\nprocess.cwd = ' + process.cwd());
});

// export default new Server().app; 


// Point static path to dist



