import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private url = 'http://192.168.144.81:3121';
  private url = 'http://localhost:3121';

  // private url = 'http://192.168.144.81:3000/';
  private production = 'https://myapps.aio.co.id/stock-opname-api'

  constructor(private HttpClient: HttpClient, private cookieService: CookieService, @Inject(DOCUMENT) private document: Document) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Login
  // Login(data: any) {
  //   return this.HttpClient.post(this.production + '/users/login', data);
  // }
  LoginEmployee(data: any) {
    return this.HttpClient.post(this.production + '/users/loginEmployee', data);
  }
  LoginOs(data: any) {
    return this.HttpClient.post(this.production + '/users/loginOs', data);
  }
  // Register
  Register(data: any) {
    return this.HttpClient.post(this.production + '/users/register', data);
  }

  // SetToken
  SetToken(token: string) {
    this.cookieService.delete('StockOpnameToken');
    this.cookieService.set('StockOpnameToken', token, 8 / 24);
  }
  // GetToken
  GetToken() {
    return this.cookieService.get('StockOpnameToken');
  }

  // Refresh Token
  RefreshToken() {
    this.cookieService.set('StockOpnameToken', this.GetToken(), 8 / 24);
  }

  // DeleteToken
  DeleteToken() {
    this.cookieService.delete('StockOpnameToken');
  }

  // GetPayload
  GetPayload() {
    const token = this.GetToken();
    if (token) {
      const payload = token.split('.')[1];
      console.log('oi', atob(payload));
      return JSON.parse(atob(payload));
    } else {
      return null;
    }
  }

  // Error handling
  errorHttpHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error ${error.error.message}`
    }
    else {
      errorMessage = `Error code : ${error.status}\n${error.message}`
    }
    return throwError(errorMessage)
  }
}
