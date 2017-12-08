import * as express from "express";

import * as expressJwt from "express-jwt";

import * as cors from "cors";
import { join, dirname } from "path";
import { json, urlencoded } from "body-parser";

import * as logger from 'morgan';
import * as errorHandler from "errorhandler";

// passport auth imports
// todo: check for ES6 export support
// this module doesn't use the ES6 default export yet
// import * as cookieParser = require('cookie-parser');
import * as cookieParser from "cookie-parser";
import * as session from 'express-session';
import * as passport from 'passport';

import * as flash from 'connect-flash';

// Database
import { Db } from "mongodb";
import { database, dbCtrl } from "./mongoDB/index";

// Application Configure Objects
import * as appConfig from "./config";

// Routers
import homeRouter from "./routes/home";
import { simpleCrudRouter as todosRouter } from "./routes/todoRouter";

// Creates and configures an ExpressJS web server.
export class Server {

  // Reference to Express instance
  public app: express.Application = null;
  // Database variable for later reuse
  public db: Db = null;
  // MongoDataBase Configure Object
  private dbConfig = appConfig.db;
  // CORS Configure Object
  private corsOptions: cors.CorsOptions = appConfig.corsOptions;

  // Run configuration methods on the Express instance
  constructor() {

    this.app = express();
    this.database();

    this.middleware();
    this.passAuth();
    this.routes();

  }

  // Configure DataBase
  private database() {
    // Connect to Database an store for later reuse
    database.connectToDatabase(this.dbConfig, (db) => {
      this.db = db;
    });
  }

  // Configure Express middleware
  private middleware() {

    // Morgan dev logger log every request to the console
    this.app.use(logger('dev'));
    // JSON parser for HTML forms
    this.app.use(json());
    // Query string parser
    this.app.use(urlencoded({ extended: false }));
    // read cookies (needed for auth)
    this.app.use(cookieParser());

    // use JWT auth to secure the api
    // this.app.use(expressJwt({ secret: appConfig.secret }).unless({ path: ['/users/authenticate', '/users/register'] }));

    // Static paths
    this.app.use(express.static(join(__dirname, "/../client")));
    // Set CORS // or this.corsOptions 
    this.app.use(cors(this.corsOptions ));
    // Enable CORS pre-flight
    this.app.options("*", cors(this.corsOptions));
  }

  // Configure Passport
  private passAuth() {

   // passportConfig();

    // required for passport
    this.app.use(session({
      secret: appConfig.secret, // session secret
      resave: true,
      saveUninitialized: true
    }));
    this.app.use(passport.initialize());
    this.app.use(passport.session()); // persistent login sessions
    //this.app.use(flash()); // use connect-flash for flash messages stored in session
  }

  // Configure Routes and API endpoints
  private routes() {

    this.app.use('/home', homeRouter);

    // Should stay last, since it covers quite a broad range of requests  "/api/todos/:" and if it's moved above
    // it will steal away the endpoints of the more specific implementations
    this.app.use('/api/todos/', todosRouter);

    // catch 404 and forward to error handler
    this.app.use((req, res, next) => {
      let err = new Error('Not Found');
      err['status'] = 404;
      next(err);
    });
    //  error handlers
    this.app.use(errorHandler());

  }
}

let server = new Server();
export default server;
