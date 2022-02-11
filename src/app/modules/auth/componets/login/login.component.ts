import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageTypes } from 'src/app/componets/app-message/app-message.component';
import { AuthService } from 'src/app/services/core/auth.service';
import { NotifyService } from 'src/app/services/core/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup!: FormGroup;
  public messageTypes = MessageTypes;

  constructor(
    private formBuild: FormBuilder,
    private authService: AuthService,
    private alertModalService: NotifyService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuild.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }


  login() {
    const { email, password } = this.formGroup.getRawValue();
    this.authService.loginUser(email, password).subscribe(
      (res) => {
        this.alertModalService.showAlertSuccess("Bem vindo", 2000);
        this.authService.saveToken(res);
        this.router.navigate(['admin']);
      },
      (data) => {
        this.alertModalService.showAlertSuccess(data.error?.message ?? 'Invalid User', 3000);
      }
    );
  }
}
