import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MasterService } from './../../../../services/master/master.service';

@Component({
  selector: 'app-master-storage',
  templateUrl: './master-storage.component.html',
  styleUrls: ['./master-storage.component.css']
})
export class MasterStorageComponent implements OnInit {
  constructor(private MasterService: MasterService, private HttpClient: HttpClient) { }

  data: any;
  dataModal: any;
  resultJson: any;

  // Alert
  showAlert: boolean = false;
  alertMessage: any;

  isLoading: boolean = true;

  ngOnInit() {
    this.MasterService.getDocStorage().subscribe((data: any) => {
      this.data = data;
      this.data.forEach((element: any) => {
        element.index = this.data.indexOf(element) + 1;
      })
      this.isLoading = false;
    })
  }
  getDataModal(id: any) {
    this.MasterService.showDocumentation(id).subscribe((data: any) => {

      if (data.method == 'GET') {
        // fetch data from endPoint
        this.HttpClient.get(data.endPoint).subscribe((data: any) => {
          this.dataModal = data;

          this.resultJson = this.dataModal;
          // this.resultJson = JSON.parse(this.dataModal);
        })
      } else {
        this.dataModal = data;
        this.resultJson = JSON.parse(this.dataModal.response);
      }
    })
  }

  copyToClipboard(text: string): void {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    this.showAlert = true;
    this.alertMessage = 'Copied to Clipboard';
    setTimeout(() => {
      this.showAlert = false;
      this.alertMessage = '';
    }, 2000)
  }
}
