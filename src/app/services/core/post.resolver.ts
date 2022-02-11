import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from '../entities/post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Post> {

  constructor(
    private postService: PostService,
  ) { }

  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
    return this.postService.crud.list();
  }
}
