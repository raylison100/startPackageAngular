import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Comments } from 'src/app/models/comment';
import { NotifyService } from 'src/app/services/core/notify.service';
import { CommentService } from 'src/app/services/entities/comment.service';
import { MessageTypes } from '../app-message/app-message.component';
import { switchMap, tap } from "rxjs/operators";

@Component({
  selector: 'app-commet',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments$!: Observable<Comments>;
  @Input() postId!: number;

  formGroup!: FormGroup;
  public messageTypes = MessageTypes;

  constructor(
    private commentService: CommentService,
    private formBuild: FormBuilder,
    private notityService: NotifyService,
  ) { }

  ngOnInit(): void {
    this.comments$ = this.commentService.listByPost(this.postId);
    this.formGroup = this.formBuild.group({
      comment: ['', [
        Validators.maxLength(255)
      ]],
    })
  }

  create() {
    const comment = this.formGroup.get('comment')?.value ?? '';

    if (comment.length > 0) {
      const data = {
        "comment": comment,
        "postId": this.postId
      }

      this.comments$ = this.commentService.crud.created(data)
        .pipe(
          switchMap(() => this.commentService.listByPost(this.postId)),
          tap(() => {
            this.formGroup.reset();
          })
        );
    }
  }

  remove(id: number) {
    this.commentService.crud.delete(id).subscribe(
      () => {
        this.comments$ = this.commentService.listByPost(this.postId)
      },
      (error) => {
        this.notityService.showAlertWarning(error.error.message, 3000)
      }
    )
  }
}
