import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumResolver } from 'src/app/services/core/album.resolver';
import { AutheticationGuard } from 'src/app/services/core/authetication.guard';
import { AlbumCreatedComponent } from './componets/album-created/album-created.component';
import { AlbumDetailComponent } from './componets/album-detail/album-detail.component';
import { AlbumListComponent } from './componets/album-list/album-list.component';


const routes: Routes = [
  {
    path: '',
    component: AlbumListComponent,
    resolve: {
      albums: AlbumResolver
    }
  },
  {
    path: 'detail/:id',
    component: AlbumDetailComponent
  },
  {
    path: 'created',
    component: AlbumCreatedComponent,
    canActivate: [AutheticationGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
