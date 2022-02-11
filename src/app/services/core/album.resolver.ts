import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/album';
import { AlbumService } from '../entities/album.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumResolver implements Resolve<Album> {

  constructor(
    private albumService: AlbumService,
  ) { }

  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Album> {
    return this.albumService.crud.list();
  }
}
