import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageTypes } from 'src/app/componets/app-message/app-message.component';
import { NotifyService } from 'src/app/services/core/notify.service';
import { UserService } from 'src/app/services/entities/user.service';
import { NewUser } from '../../../../models/new-user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  public formGroup!: FormGroup;
  public messageTypes = MessageTypes;

  constructor(
    private formBuild: FormBuilder,
    private userService: UserService,
    private alertModalService: NotifyService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuild.group({
      name: ['', [
        Validators.required, Validators.minLength(3)
      ]],
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }

  createUser() {
    const user = this.formGroup.getRawValue() as NewUser
    console.log(user);
    this.userService.crud.created(user).subscribe(
      () => {
        this.alertModalService.showAlertSuccess("Usuario criado com sucesso", 2000);
        this.router.navigate(['/admin/auth']);
      },
      (data) => {
        this.alertModalService.showAlertDanger(data.error.message, 3000);
      }
    );
  }
}
