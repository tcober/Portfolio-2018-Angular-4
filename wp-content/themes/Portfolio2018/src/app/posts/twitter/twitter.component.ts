import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { Tweets } from '../tweets'


@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {
  tweets: Tweets;

  constructor(
    private tweetsService: TwitterService
  ) { }

  getTweets(){
    this.tweetsService
      .getTweets()
      .subscribe(res => {
        this.tweets = res;
      });
  }

  ngOnInit() {
    this.getTweets();
  }

}
