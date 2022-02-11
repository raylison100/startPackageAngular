import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenUser } from 'src/app/models/token-user';
import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        public auth: AuthService,
    ) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        var tokenUser = JSON.parse(this.auth.getStorageToken()) as TokenUser

        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${tokenUser ? tokenUser.token : ''}`,
                'Access-Control-Allow-Origin': '*',
            },
        });

        return next.handle(request);
    }
}