import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // constructor(private AuthService: AuthService, private Router: Router) { }
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   const url = state.url;

  //   if (this.AuthService.GetToken()) {
  //     if (url.includes('auth')) {
  //       this.Router.navigateByUrl('/home');
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   } else {
  //     if (url.includes('auth')) {
  //       return true;
  //     } else {
  //       this.Router.navigateByUrl('/auth');
  //       return false;
  //     }
  //   }
  // }
  constructor(private AuthService: AuthService, private Router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;

    if (this.AuthService.GetToken()) {
      if (url.includes('auth')) {
        this.Router.navigateByUrl('/home');
        return false;
      } else {
        return true;
      }
    } else {
      if (url.includes('auth')) {
        return true;
      } else {
        // Simpan informasi tentang halaman tujuan yang ingin diakses
        const destinationUrl = state.url;
        sessionStorage.setItem('destinationUrl', destinationUrl);

        // Navigasi ke halaman login
        this.Router.navigateByUrl('/auth');
        return false; // Menghentikan navigasi ke rute yang terlindungi
      }
    }
  }

}
