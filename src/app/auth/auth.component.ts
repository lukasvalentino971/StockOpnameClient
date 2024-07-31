import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  showLogin = false

  constructor(public AuthService: AuthService, private router: Router) { }

  loginForm!: FormGroup;
  registerForm!: FormGroup;

  showLoginMobile: boolean = true;

  // Alert
  error: boolean = false;
  msg: any[] = [];
  registerMsg: any[] = [];

  isShowPassword: boolean = false;

  ngOnInit() {

    this.loginForm = new FormGroup({
      nik: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('')
    })

    this.registerForm = new FormGroup({
      nik: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }
  login() {
    this.AuthService.LoginEmployee(this.loginForm.value).subscribe((res: any) => {

      this.AuthService.SetToken(res.token);
      const destinationUrl = sessionStorage.getItem('destinationUrl');

      if (destinationUrl) {
        sessionStorage.removeItem('destinationUrl');

        this.router.navigateByUrl(destinationUrl);
      } else {
        this.router.navigateByUrl('/home');
      }
    }, (err: any) => {
      this.error = true;
      if (Array.isArray(err.error.message)) {
        err.error.message.forEach((element: any) => {
          this.msg.push(element.message);
        })
      } else {
        this.msg.push(err.error.message);
      }
      setTimeout(() => {
        this.msg = [];
      }, 4000);
    })
  }
  loginOS() {
    this.AuthService.LoginOs(this.registerForm.value).subscribe((res: any) => {
      this.AuthService.SetToken(res.token);
      const destinationUrl = sessionStorage.getItem('destinationUrl');

      if (destinationUrl) {
        sessionStorage.removeItem('destinationUrl');

        this.router.navigateByUrl(destinationUrl);
      } else {
        this.router.navigateByUrl('/home');
      }
    }, (err: any) => {

      this.error = true;
      if (Array.isArray(err.error.message)) {
        err.error.message.forEach((element: any) => {
          this.registerMsg.push(element.message);
        })
      } else {
        this.registerMsg.push(err.error.message);
      }
      setTimeout(() => {
        this.registerMsg = [];
      }, 4000);
    })
  }
}
