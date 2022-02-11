import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { environment } from 'src/environments/environment';
import { CrudService } from '../core/crud.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public crud: CrudService;

  private entity: string = 'posts';

  constructor(private http: HttpClient) {
    this.crud = new CrudService(this.http, this.entity);
  }

  public created(text: string, link: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('text', text);
    formData.append('link', link);
    formData.append('image', file);

    return this.http.post(`${environment.API_URL}/${this.entity}`, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }
}
