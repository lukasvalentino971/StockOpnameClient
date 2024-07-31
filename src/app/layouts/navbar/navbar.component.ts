import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MasterService } from '../../services/master/master.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public Router: Router, public AuthService: AuthService, public MasterService: MasterService) { }
  date: any;
  user: any;
  timeLondon: any;
  isAllowed = false;
  userData: any;
  ngOnInit() {
    this.user = this.AuthService.GetPayload();
    setInterval(() => {
      this.date = moment().format('MMMM Do, YYYY | H:mm:ss');
    }
      , 1000);
    
    this.MasterService.showEmailUserByNik(this.user.nik).subscribe((res: any) => {
      console.log(res);
      this.userData = res;
      if (!this.userData) {
        this.isAllowed = false;
      } else {
        if (this.userData.isAdmin == 1) {
          this.isAllowed = true;
        } else {
          this.isAllowed = false;
        }
      }
    })
  }

  logOut() {
    this.AuthService.DeleteToken()
    this.user = null;
    this.Router.navigateByUrl('/auth');
  }
}
