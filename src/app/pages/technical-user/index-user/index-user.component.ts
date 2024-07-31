import { Router } from '@angular/router';
import { MasterService } from './../../../services/master/master.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.css']
})
export class IndexUserComponent implements OnInit {
  constructor(private MasterService: MasterService, private Router: Router) { }

  data: any;


  //Filter and Pagination
  itemsPerPage: number = 10;
  p: number = 1;
  term: any;

  dataModal: any;

  //alert
  alert: boolean = false;
  alertType: any;
  alertMessage: any;

  isLoading: boolean = true;

  ngOnInit(): void {
    this.MasterService.getEmailUser().subscribe((res) => {
      this.data = res;
      this.data.map((item: any) => {
        item.index = this.data.indexOf(item) + 1;
      })
      this.isLoading = false;
    })
  }

  getDataModal(id: any) {
    this.MasterService.showEmailUser(id).subscribe((res) => {
      this.dataModal = res;
    })
  }
  closeModal() {
    // Reset dataModal to null to hide the modal
    this.dataModal = null;
  }

  destroyData(id: any) {
    this.MasterService.deleteEmailUser(id).subscribe((res: any) => {
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
  setAdmin(id: any, value: any) {
    let body = {
      isAdmin: value
    }
    this.MasterService.setAdmin(id, body).subscribe((res: any) => {
      this.ngOnInit();
      this.alert = true;
      this.alertMessage = "Data berhasil diubah";
      setTimeout(() => {
        this.alert = false;
        this.alertMessage = "";
      }
        , 3000);
    })
  }
}
