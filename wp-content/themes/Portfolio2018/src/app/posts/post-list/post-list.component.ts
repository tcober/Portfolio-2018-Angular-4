import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
declare var $:any;

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  posts: Post[];

  constructor( 
    private postsService: PostsService
  ) { }

  getPosts(){
    this.postsService
      .getPosts()
      .subscribe(res => {
        this.posts = res;
      });
      setTimeout(function() {$('.worklist').addClass('fadeIn') }, 200);
  }

  ngOnInit() {
    this.getPosts();
  }

  // ngAfterViewInit() {
  //   setTimeout(function() {$('.worklist').addClass('fadeIn') }, 200);
  // }

  setId(postId:any){
    this.postsService.postId = "/" + postId;
  }

}
