import { Router, Request, Response, NextFunction } from'express';
// import User from '../models/user.model';
// declare axios for making http requests
import axios from'axios';

const API = 'https://jsonplaceholder.typicode.com';
let router = Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req: Request, res: Response) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

export default router;