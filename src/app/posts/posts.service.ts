import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts(): Observable<any[]> {
    return this.http.get('http://localhost:3000/api/axios/posts')
      .map(res => res.json());
  }
}
