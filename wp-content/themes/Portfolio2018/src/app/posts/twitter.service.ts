import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Tweets } from './tweets';
import { DatePipe } from '@angular/common';

@Injectable()
export class TwitterService {

  private tweetsUrl = "http://localhost:8888/twitterfeed/";

  constructor(
    private http: Http
  ) {}

  getTweets(): Observable<Tweets[]> {
    return this.http
    .get(this.tweetsUrl)
    .map((res: Response) => res.json());
  }

}
