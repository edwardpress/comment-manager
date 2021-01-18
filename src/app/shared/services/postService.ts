import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../constant'
import { Post } from 'src/app/model/post.model';


@Injectable({ providedIn: 'root' })
export class PostService {
  public url = API_URL + "/posts"

  constructor(protected http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(this.url);
  }
}
