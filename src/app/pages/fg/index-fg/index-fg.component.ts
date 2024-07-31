import { AuthService } from './../../../services/auth/auth.service';
import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-index-fg',
  templateUrl: './index-fg.component.html',
  styleUrls: ['./index-fg.component.css']
})
export class IndexFgComponent implements OnInit {

  constructor(private router: Router, private MasterService: MasterService, private AuthService: AuthService) { }

  @ViewChild('content', { static: false }) el!: ElementRef

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

  // export
  dataExport: any;
  showTable = false;

  isLoading = true;

  user: any;

  showChecklist: boolean = true; // Atur nilai default sesuai kebutuhan

  isAllowed: any;

  userData: any;


  ngOnInit() {
    console.log(`test`);
    this.user = this.AuthService.GetPayload();
    console.log(`user ${this.user}`);

    this.MasterService.getFG().subscribe((res) => {
      console.log(`res ${res}`);
      this.data = res;
      console.log(`res ${res}`);
      this.data.sort((a: any, b: any) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
      // Mapping index
      this.data.map((item: any, index: number) => {
        item.index = index + 1;
      });
      this.isLoading = false;
    }, (err) => {
      console.log(`ERR ${err.message}`);
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
    this.MasterService.showFG(this.idDataModal).subscribe((res: any) => {
      this.dataModal = res;
    })
  }
  destroyData(id: any) {
    this.MasterService.deleteFG(id).subscribe((res: any) => {
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
  // makePdf() {
  //   let pdf = new jsPDF({
  //     orientation: "landscape",
  //     unit: "in",
  //     format: [4, 2]
  //   });
  //   pdf.html(this.el.nativeElement, {
  //     callback: (pdf) => {
  //       pdf.save("sample.pdf")
  //     }
  //   })
  // }
  exportPdf(id: any) {
    this.MasterService.showFG(id).subscribe((res: any) => {
      this.dataExport = res;
    })
    this.showTable = true;
    html2canvas(document.getElementById('tableExport')!).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'mm', 'a4');
      const width = pdf.internal.pageSize.getWidth();
      const height = canvas.height * width / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save('template-fg.pdf');
    })
    this.showTable = false;
  }

}
