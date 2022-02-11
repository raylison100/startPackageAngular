import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './componets/auth.component';
import { LoginComponent } from './componets/login/login.component';
import { NewUserComponent } from './componets/new-user/new-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponetsModule } from 'src/app/componets/componets.module';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    NewUserComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    ComponetsModule
  ],
})
export class AuthModule { }
