/*
///<reference path='node.d.ts' />
///<reference path='express.d.ts' />
*/

import { Router, Request, Response, NextFunction } from'express';
import Prods from '../models/prods.model';

// var express = require('express');
// returens router instanace which can be mounted as a middleware
// var router = express.Router();
let router = Router();

/* import * as Hero from '../src/app/hero.ts'
var bodyParser = require('body-parser');
var parseUrlEncoded = bodyParser.urlencoded({
  extended: false
});
*/

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('prods works');
});

// the root path relative to the path where it's mounted.
router.route('/hero')
  // get all the users when a method passed is GET
  .get((req: Request, res: Response, next)=> {
    console.log('get prod');
    Prods.find({})
    .then((data)=> {       
        res.status(200).json(data);
    })
    .catch((err)=> {        
        res.sendStatus(500).send(err);
    })
  })
  // create a prod when the method passed is POST
  // .post(parseUrlEncoded, function (req, res) {
  .post((req: Request, res: Response)=> {
    // create a new instance of the user model
    // it should be req.body not req.data as there is no data property in req object
    // res.send('prods/post works');
    var data = new Prods(req.body); // Prods is a schema constructor

    // save the data received
    data.save((err)=> {
      if (err) {
        console.log(err);
        return res.sendStatus(500).send(err);
      } else {
        // give some success message
        // console.log(data);
        res.status(201).json(data);
      }
    })
  });

// on accessing user Route by id
router.route('/hero/:id')
// router.route('/hero/:slug')
  // get the user by id
  .get((req: Request, res: Response)=> {
    console.log(req.params.id);
    Prods.findById(req.params.id, (err, data)=> {
      if (err) {
        return res.sendStatus(500).send(err);
      } else {
        //console.dir(data);
        res.status(200).json(data);
      }
    })
  })
  // update the user by id
  .put((req: Request, res: Response)=> {
    Prods.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      console.log(req.body);
      if (err) {
        res.sendStatus(500).send(err);
      } else return res.status(200).json(post);
    });
  })
  .delete((req: Request, res: Response)=> {
    // const slug: string = req.params.slug;
    // console.log(req.params.slug);
    Prods.findOneAndRemove({ _id: req.params.id }, (err, data)=>{
    // Prods.deleteOne({ _id: req.params.id }, (err, data) => {
      if (err) return res.sendStatus(500).send(err);
      else
        // give some success message
        //res.sendStatus(200);
        return res.json(true);
    })
  });
// exports the router as a Node module
export default router;
