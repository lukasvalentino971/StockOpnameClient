import { AuthService } from './../../../services/auth/auth.service';
import { forkJoin } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-detail-fg',
  templateUrl: './detail-fg.component.html',
  styleUrls: ['./detail-fg.component.css']
})
export class DetailFgComponent implements OnInit {

  @ViewChild('content', { static: false }) el!: ElementRef


  constructor(private Router: Router, private MasterService: MasterService, private AuthService: AuthService) {
  }
  date: any;
  date2: any;
  dateUpdate: any

  path: any;

  // Filter and Pagination
  itemsPerPage: number = 10;
  p: number = 1;
  term: any;


  params = this.Router.url.split('/')[2];

  data: any;
  dataTrFg: any;
  dataSection: any;

  dataModal: any;

  form!: FormGroup;
  formUpdate!: FormGroup;
  formUpdateMaster!: FormGroup;

  // alert
  alert: boolean = false;
  alertType: any;
  alertMessage: any;

  // Filter by date

  photo!: File;
  previewImage: any;
  previewDoc: any;
  formFilter!: FormGroup;
  storages: any;

  supportingDoc!: File;

  user: any;

  isLoading: boolean = true;

  totalConsume: number = 0;
  totalQty: number = 0;

  ngOnInit(): void {
    this.user = this.AuthService.GetPayload();
    this.date = new Date().toISOString().substring(0, 10);
    this.date2 = new Date().toISOString().substring(0, 10);
    forkJoin([
      this.MasterService.showFG(this.params),
      this.MasterService.getTransactionFG(this.params),
      this.MasterService.getSection(),
      this.MasterService.getStorage(),
    ]).subscribe(([res, trFg, section, storage]: any) => {
      this.data = res;
      this.dataTrFg = trFg;
      this.dataSection = section;
      this.dataTrFg.map((item: any) => {
        item.index = this.dataTrFg.indexOf(item) + 1;
        this.totalConsume += item.consume;
      })
      this.path = `https://myapps.aio.co.id/stock-opname-api${this.data.supportingDoc}`
      // this.path = `http://192.168.144.81:3121${this.data.supportingDoc}`


      this.formUpdateMaster = new FormGroup({
        name: new FormControl(this.data.name, Validators.required),
        line: new FormControl(this.data.line, Validators.required),
        qty: new FormControl(this.data.qty, Validators.required),
        lotNumber: new FormControl(this.data.lotNumber, Validators.required),
        pcs: new FormControl(this.data.pcs, Validators.required),
        totalQty: new FormControl(this.data.totalQty, Validators.required),
        storage: new FormControl(this.data.storage, Validators.required),
        customStorage: new FormControl(this.data.customStorage, Validators.required),
        detailStorage: new FormControl(this.data.detailStorage, Validators.required),
        storedUntil: new FormControl(this.data.storedUntil, Validators.required),
        usage: new FormControl(this.data.usage, Validators.required),
        nameTr: new FormControl(this.data.nameTr, Validators.required),
        pic: new FormControl(this.data.pic, Validators.required),
        email: new FormControl(this.data.email, Validators.required),
        mstSectionId: new FormControl(this.data.mstSectionId, Validators.required),
      })
      this.storages = storage;
      this.previewImage = `https://myapps.aio.co.id/stock-opname-api//${this.data.photo}`
      this.previewDoc = `https://myapps.aio.co.id/stock-opname-api//${this.data.supportingDoc}`
      // this.previewImage = `http://192.168.144.81:3121/${this.data.photo}`
      // this.previewDoc = `http://192.168.144.81:3121/${this.data.supportingDoc}`
      this.isLoading = false;

    })
    this.form = new FormGroup({
      mstFgId: new FormControl(this.params),
      date: new FormControl(this.date),
      consume: new FormControl(''),
      usage: new FormControl(''),
      nameTr: new FormControl(''),
    })
    this.formFilter = new FormGroup({
      mstFgId: new FormControl(this.params),
      startDate: new FormControl(this.date),
      endDate: new FormControl(this.date2),
    })

  }

  //check input
  showWarning: boolean = false;

  // Metode untuk memeriksa input pengguna
  checkInput(event: any) {
    const value = event.target.value;

    // Menguji apakah nilai input mengandung operasi bilangan yang tidak diizinkan
    const regex = /(?:^|(?<=\D))-\d+(?:[-+*/]\d+)*(?=\D|$)/;

    // Jika nilai input mengandung operasi bilangan yang tidak diizinkan, tampilkan pesan peringatan
    if (regex.test(value)) {
      this.showWarning = true;
    } else {
      this.showWarning = false;
    }
  }





  getDataModal(id: any) {
    this.MasterService.showTransactionFG(id).subscribe((res: any) => {
      this.dataModal = res;
      this.dateUpdate = this.dataModal.date;
      this.dateUpdate = this.dateUpdate.substring(0, 10);
      this.formUpdate = new FormGroup({
        mstFgId: new FormControl(this.dataModal.mstFgId),
        date: new FormControl(this.dateUpdate),
        consume: new FormControl(this.dataModal.consume),
        usage: new FormControl(this.dataModal.usage),
        nameTr: new FormControl(this.dataModal.nameTr)
      })
    })
  }

  storeData() {
    this.form.value.mstFgId = parseInt(this.form.value.mstFgId);
    this.MasterService.createTransactionFG(this.form.value).subscribe((res: any) => {
      this.ngOnInit();
      this.alert = true;
      this.alertType = 'alert-success';
      this.alertMessage = "Berhasil menambahkan data baru";
      setTimeout(() => {
        this.alert = false;
        this.alertType = '';
        this.alertMessage = '';
      }, 1500);
    })
  }

  processSupportingDoc(event: any) {
    this.supportingDoc = event.target.files[0];
  }
  updateData() {
    this.formUpdate.value.mstFgId = parseInt(this.formUpdate.value.mstFgId);
    this.MasterService.updateTransactionFG(this.dataModal.id, this.formUpdate.value).subscribe((res: any) => {
      this.ngOnInit();
      this.alert = true;
      this.alertType = 'alert-success';
      this.alertMessage = "Data berhasil diubah";
      setTimeout(() => {
        this.alert = false;
        this.alertType = '';
        this.alertMessage = '';
      }, 1500);
    })
  }

  destroyData(id: any) {
    this.MasterService.deleteTransactionFG(id).subscribe((res: any) => {
      this.ngOnInit();
      this.alert = true;
      this.alertType = 'alert-error';
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

  filterData() {

    this.MasterService.filterBydateFG(this.formFilter.value).subscribe((res: any) => {
      this.dataTrFg = res;

      this.dataTrFg.map((item: any) => {
        item.index = this.dataTrFg.indexOf(item) + 1;
      })
    })
  }

  makePdf() {
    let pdf = new jsPDF();
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("sample.pdf")
      }
    })
  }
  processPhoto(event: any) {
    this.photo = event.target.files[0];
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [image] = event.target.files;
      reader.readAsDataURL(image);
      reader.onload = () => {
        this.previewImage = reader.result as string;
        this.formUpdateMaster.patchValue({
          image: reader.result,
          url: reader.result
        })
      }
    }
  }
  submit() {
    this.formUpdateMaster.value.mstSectionId = parseInt(this.formUpdateMaster.value.mstSectionId);
    // filter value form that not null or empty
    Object.keys(this.formUpdateMaster.value).forEach(key => {
      if (this.formUpdateMaster.value[key] === null || this.formUpdateMaster.value[key] === '') {
        delete this.formUpdateMaster.value[key];
      }
    })
    const formData = new FormData();
    // convert this.formUpdateMaster.value to formData
    Object.keys(this.formUpdateMaster.value).forEach(key => {
      formData.append(key, this.formUpdateMaster.value[key]);
    })

    // append photo to formData
    if (this.photo) {
      formData.append('photo', this.photo, this.photo.name);
    }
    if (this.supportingDoc) {
      formData.append('supportingDoc', this.supportingDoc, this.supportingDoc.name);
    }
    this.MasterService.updateFG(this.params, formData).subscribe((res: any) => {
      this.ngOnInit();
      this.alert = true;
      this.alertType = 'alert-success';
      this.alertMessage = "Data berhasil diubah";
      setTimeout(() => {
        this.alert = false;
        this.alertType = '';
        this.alertMessage = '';
      }, 1500);
    })
  }


}
