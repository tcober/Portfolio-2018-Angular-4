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

  post: any;
  title:string;
  fader: boolean = false;

  constructor( 
    private postsService: PostsService,
  ) { }

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

  ngAfterViewInit() {
    setTimeout(function() {$('.content-holder').addClass('fadeIn') }, 200);
    this.imageFader();
  }

  imageFader() {
    $(".pictures img").one("load", function() {
      $(this).addClass("fadeIn");
    }).each(function() {
      if(this.complete) $(this).load();
    });
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
