import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { MessageTypes } from 'src/app/componets/app-message/app-message.component';
import { PostService } from 'src/app/services/entities/post.service';

@Component({
  selector: 'app-post-created',
  templateUrl: './post-created.component.html',
  styleUrls: ['./post-created.component.css']
})
export class PostCreatedComponent implements OnInit {

  formGroup!: FormGroup;
  file!: File;
  preview!: string;
  percentConclusion = 0;

  messageTypes!: MessageTypes

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', [
        Validators.required, Validators.minLength(255)
      ]],
      link: ['', Validators.maxLength(255)],
    });
  }

  created() {
    const text = this.formGroup.get('description')?.value ?? false;
    const link = this.formGroup.get('link')?.value ?? '';

    this.postService
      .created(text, link, this.file)
      .pipe(finalize(() => this.router.navigate(['posts'])))
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            const total = event.total ?? 1;
            this.percentConclusion = Math.round(100 * (event.loaded / total));
          }
        },
        (error) => console.log(error)
      );
  }

  saveFile(sendFile: any): void {
    const [file] = sendFile?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }
}
