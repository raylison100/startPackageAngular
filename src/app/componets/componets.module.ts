import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { AppMessageComponent } from './app-message/app-message.component';
import { CardComponent } from './card/card.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './commet/comment.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  AppMessageComponent,
  AlertModalComponent,
  PostComponent,
  CardComponent,
  CommentComponent,
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [...components],
})
export class ComponetsModule { }
