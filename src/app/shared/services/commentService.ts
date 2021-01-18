import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { API_URL } from '../constant'
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class CommentService {
  public url = API_URL + "/comments"

  constructor(protected http: HttpClient) {}

  getCommentsById(id:string):Observable<Comment[]>{
    return this.http.get<Comment[]>(this.url,{
      params:{
        postId:id
      }
    });
  }
}
