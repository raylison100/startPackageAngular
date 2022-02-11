import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutheticationGuard } from 'src/app/services/core/authetication.guard';
import { PostResolver } from 'src/app/services/core/post.resolver';
import { PostCreatedComponent } from './componets/post-created/post-created.component';
import { PostDetailComponent } from './componets/post-detail/post-detail.component';
import { PostListComponent } from './componets/post-list/post-list.component';


const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    resolve: {
      posts: PostResolver
    }
  },
  {
    path: 'detail/:id',
    component: PostDetailComponent
  },
  {
    path: 'created',
    component: PostCreatedComponent,
    canActivate: [AutheticationGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
