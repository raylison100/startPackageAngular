import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from '../core/crud.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  public crud: CrudService;

  private entity: string = 'albums';

  constructor(private http: HttpClient) {
    this.crud = new CrudService(this.http, this.entity);
  }

  public addPost(id: number, idPost: number): Observable<any> {
    return this.http.post(`${environment.API_URL}/${this.entity}/${id}/add/post/${idPost}`, {});
  }

  public removePost(id: number, idPost: number): Observable<any> {
    return this.http.post(`${environment.API_URL}/${this.entity}/${id}/remove/post/${idPost}`, {});
  }
}
