import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from '../core/crud.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public crud: CrudService;

  private entity: string = 'users';

  constructor(private http: HttpClient) {
    this.crud = new CrudService(this.http, this.entity);
  }
}
