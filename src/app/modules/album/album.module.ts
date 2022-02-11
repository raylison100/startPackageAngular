import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumRoutingModule } from './album-routing.module';
import { AlbumCreatedComponent } from './componets/album-created/album-created.component';
import { AlbumDetailComponent } from './componets/album-detail/album-detail.component';
import { AlbumListComponent } from './componets/album-list/album-list.component';

@NgModule({
  declarations: [
    AlbumDetailComponent,
    AlbumCreatedComponent,
    AlbumListComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule
  ]
})
export class AlbumModule { }
