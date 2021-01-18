import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../app/model/post.model'
import { PostService } from '../app/shared/services/postService'
import { CommentService } from '../app/shared/services/commentService'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: String;
  posts: Post[];

  constructor(
    private postService:PostService
  ){
    this.posts = [];
    this.title = "Comment Manager"

  }

  ngOnInit() {
    this.getPosts()
  }

  getPosts(){
    this.postService.getPosts().subscribe(
      result => {
        this.posts = result.map(res=>{
          return {
            ...res,
            comments:[]
          }
        })
    
      }
          
    )
  }


  
}
