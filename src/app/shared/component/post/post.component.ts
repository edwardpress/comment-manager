import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { Comment } from 'src/app/model/comment.model'
import { CommentService } from 'src/app/shared/services/commentService'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post = <Post>{}
  comments:any[]
  commentsCount:Number
  display:boolean
  commentSearch:string

  constructor(private commentService: CommentService) { 
    this.comments = [];
    this.commentsCount = 0;
    this.display = true;
    this.commentSearch ="";
    
  }

  ngOnInit(): void {
    this.commentService.getCommentsById(this.post.id).subscribe(comments=>{
      this.commentsCount= comments.length
      this.comments = comments;
      
    })
    
  }

  toggleDisplay(){
    this.display = !this.display
  }

  filteredComment(){
    return this.comments.filter(comment=>{
      return comment.body.includes(this.commentSearch) || comment.email.includes(this.commentSearch) || comment.name.includes(this.commentSearch)

     })


  }




}
