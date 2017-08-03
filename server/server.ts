// /<reference path='node.d.ts' />

// Get dependencies
import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as compression from 'compression';
// Morgan (logger)
import * as morgan from 'morgan';

// Get our API routes
import config from'./config/config';
import api from './routes/api';
import prods from'./routes/prods';

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
    mongoose.connect(MONGO_URI || process.env.MONGODB_URI);
    mongoose.connect(config.db);

    //config 
    // this.app.use()
    // Parsers for POST data
    this.app.use(helmet());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(morgan('dev'));
    this.app.use(express.static(path.join(__dirname, 'dist')));
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
const port = process.env.PORT || '3000';
let app = new Server().app;
// Catch all other routes and return the index file
app.all('*', (req, res, next) => {
  //res.sendFile(path.join(__dirname, 'dist/index.html'));
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.set('port', port);
app.listen(port, ()=> {
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



