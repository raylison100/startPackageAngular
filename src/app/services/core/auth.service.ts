import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenUser } from 'src/app/models/token-user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenSubject = new BehaviorSubject<TokenUser>({});

  constructor(
    private http: HttpClient,
  ) {
    if (this.isLoggedIn()) {
      this.decodeToken();
    }
  }

  public saveToken(token: TokenUser): void {
    const userData = JSON.stringify(token);
    window.localStorage.setItem('tokenData', userData);
    this.decodeToken();
  }

  public getStorageToken(): any {
    return window.localStorage.getItem('tokenData')
  }

  public logout(): void {
    window.localStorage.removeItem('tokenData');
    this.tokenSubject.next({})
  }

  public isLoggedIn(): boolean {
    return !!this.getStorageToken();
  }

  private decodeToken() {
    const decodeToken = JSON.parse(this.getStorageToken()) as TokenUser
    this.tokenSubject.next(decodeToken);
  }

  public getToken() {
    return this.tokenSubject.asObservable();
  }

  public loginUser(email: string, password: string): Observable<any> {
    const requestData = {
      email,
      password
    };

    return this.http.post(`${environment.API_URL}/auth`, requestData);
  }
}
