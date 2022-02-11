import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { NotifyService } from 'src/app/services/core/notify.service';
import { PostService } from 'src/app/services/entities/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postID!: number;
  post$!: Observable<Post>;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private notifyService: NotifyService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.postID = this.activatedRoute.snapshot.params.id;
    this.post$ = this.postService.crud.show(this.postID);
  }

  externalLink(link: string) {
    window.open(link, "_blank");
  }

  removePost() {
    this.postService.crud.delete(this.postID).subscribe((res) => {
      this.router.navigate(['posts']);
    },
      (error) => {
        console.log(error);
        this.notifyService.showAlertDanger(error?.error?.message ?? "Tente novamente mais tarde", 2000)
      });
  }

}
