import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
declare var $: any;

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {

  post: Post[];

  constructor( private postsService: PostsService ) { }

  getPosts(){
    this.postsService
      .getPosts(this.postsService.postId)
      .subscribe(res => {
        this.post = res;
      });
      this.scrollSize();
  }

  ngOnInit() {
    this.getPosts();
  }

  scrollSize() {
      $(window).scroll(function(i) {
      var scrollVar = $(window).scrollTop();
      var scrollVarPerc = 80 + (100 - (100 - $(window).scrollTop() / 10)) + "%";
      $('.portdescription').css({
        'opacity': (100 - scrollVar) / 100
      });
      $('.portimages').css("width", scrollVarPerc);
    });
  }

}
