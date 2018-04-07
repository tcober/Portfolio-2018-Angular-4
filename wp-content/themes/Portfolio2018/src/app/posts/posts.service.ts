import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from './post';

@Injectable()
export class PostsService {
  private postsUrl = "http://localhost:8888/wp-json/wp/v2/";
  postId: string;

  constructor(private http: Http) { }

  getPosts(postId?:any): Observable<Post[]> {
    if(postId == undefined || postId == null) {
      return this.http
      .get(this.postsUrl + 'posts')
      .map((res: Response) => res.json());
    } else {
      return this.http
      .get(this.postsUrl + 'posts' + postId)
      .map((res: Response) => res.json());
    }

  }

}
