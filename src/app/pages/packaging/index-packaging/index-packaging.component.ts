import { AuthService } from './../../../services/auth/auth.service';
import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-index-packaging',
  templateUrl: './index-packaging.component.html',
  styleUrls: ['./index-packaging.component.css']
})
export class IndexPackagingComponent implements OnInit {
  constructor(private router: Router, private MasterService: MasterService, private AuthService:AuthService) { }

  // Filter and Pagination
  itemsPerPage: number = 10;
  p: number = 1;
  term: any;

  data: any;

  idDataModal: any;
  dataModal: any;

  // alert
  alert: boolean = false;
  alertType: any;
  alertMessage: any;

  isLoading: boolean = true;

  user: any;

  isAllowed: any;
  userData: any;

  ngOnInit() {
    this.user = this.AuthService.GetPayload();
    this.MasterService.getPackaging().subscribe((res) => {
      this.data = res;
      this.data.sort((a: any, b: any) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
      // Mapping index
      this.data.map((item: any, index: number) => {
        item.index = index + 1;
      });
      this.isLoading = false;
    });

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
  getDataModal(id: any) {
    this.idDataModal = id;
    this.MasterService.showPackaging(this.idDataModal).subscribe((res: any) => {
      this.dataModal = res;
    })
  }
  destroyData(id: any) {
    this.MasterService.deletePackaging(id).subscribe((res: any) => {
      this.ngOnInit();
      this.alert = true;
      this.alertType = 'alert-success';
      this.alertMessage = "Data berhasil dihapus";
      setTimeout(() => {
        this.alert = false;
        this.alertType = '';
        this.alertMessage = '';
      }, 1500);
    })
  }

  resetAlert() {
    this.alert = false;
    this.alertType = '';
    this.alertMessage = '';
  }
}
