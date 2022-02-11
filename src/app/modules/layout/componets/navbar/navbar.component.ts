import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/core/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    isLogin$ = this.authService.getToken();
    isCollapsed: boolean = true;

    constructor(private authService: AuthService) { }

    ngOnInit() {
    }

    logout() {
        this.authService.logout();
    }
}
