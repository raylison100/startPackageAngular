import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CrudService } from '../core/crud.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  public crud: CrudService;

  private entity: string = 'comments';

  constructor(private http: HttpClient) {
    this.crud = new CrudService(this.http, this.entity);
  }

  public listByPost(idPost: number): Observable<any> {
    return this.http.get(
      `${environment.API_URL}/${this.entity}/post/${idPost}`);
  }
}
