import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponetsModule } from 'src/app/componets/componets.module';
import { PostCreatedComponent } from './componets/post-created/post-created.component';
import { PostDetailComponent } from './componets/post-detail/post-detail.component';
import { PostListComponent } from './componets/post-list/post-list.component';
import { PostRoutingModule } from './post-routing.module';

const components = [
  PostDetailComponent,
  PostCreatedComponent,
  PostListComponent,
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ComponetsModule,
    ReactiveFormsModule,
  ],
  exports: [...components],
})
export class PostModule { }
