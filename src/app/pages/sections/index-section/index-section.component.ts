import { Router } from '@angular/router';
import { MasterService } from './../../../services/master/master.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-section',
  templateUrl: './index-section.component.html',
  styleUrls: ['./index-section.component.css']
})
export class IndexSectionComponent implements OnInit {

  constructor(private MasterService: MasterService, private Router: Router) { }

  data: any;

  // Filter and Pagination
  itemsPerPage: number = 10;
  p: number = 1;
  term: any;

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
    this.MasterService.getSection().subscribe((res) => {
      this.data = res;
      this.data.map((item: any) => {
        item.index = this.data.indexOf(item) + 1;
      })
      this.isLoading = false;
    })

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
    this.MasterService.showSection(id).subscribe((res: any) => {
      this.dataModal = res;
    })
  }

  destroyData(id: any) {
    this.MasterService.deleteSection(id).subscribe((res: any) => {
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
