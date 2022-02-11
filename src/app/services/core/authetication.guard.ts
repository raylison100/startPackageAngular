import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root'
})
export class AutheticationGuard {

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private router: Router
  ) { }

  canActivate() {
    if (!this.authService.isLoggedIn()) {
      this.notifyService.showAlertWarning("Você precisar esta logado", 3000);
      return false;
    } else {
      return true;
    }
  }
}
