import { AuthService } from './../../../services/auth/auth.service';
import { forkJoin } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-tools',
  templateUrl: './detail-tools.component.html',
  styleUrls: ['./detail-tools.component.css']
})
export class DetailToolsComponent implements OnInit {

  constructor(private Router: Router, private MasterService: MasterService, private AuthService: AuthService) { }
  date: any;
  date2: any;
  dateUpdate: any

  // Filter and Pagination
  itemsPerPage: number = 10;
  p: number = 1;
  term: any;

  params = this.Router.url.split('/')[2];

  data: any;
  dataTrTools: any;

  dataModal: any;

  dateStoredUntil: any;

  form!: FormGroup;
  formUpdate!: FormGroup;

  // alert
  alert: boolean = false;
  alertType: any;
  alertMessage: any;

  // Filter by date
  formFilter!: FormGroup;

  section: any;
  formUpdateMaster!: FormGroup;
  photo!: File;
  previewImage: any;
  previewDoc: any;
  supportingDoc!: File;
  storages: any;

  user: any;

  path: any;

  isLoading: boolean = true;

  totalConsume: number = 0;
  ngOnInit() {
    this.user = this.AuthService.GetPayload();
    this.date = new Date().toISOString().substring(0, 10);
    this.date2 = new Date().toISOString().substring(0, 10);
    forkJoin([
      this.MasterService.showTools(this.params),
      this.MasterService.getTransactionTools(this.params),
      this.MasterService.getSection(),
      this.MasterService.getStorage(),
    ]).subscribe(([res, trFg, section, storage]: any) => {
      this.data = res;
      this.section = section;
      this.dataTrTools = trFg;
      this.storages = storage;
      this.dataTrTools.map((item: any) => {
        item.index = this.dataTrTools.indexOf(item) + 1;
        this.totalConsume += item.consume;
      })
      this.isLoading = false;
      this.formUpdateMaster = new FormGroup({
        name: new FormControl(this.data.name),
        supplier: new FormControl(this.data.supplier),
        origin: new FormControl(this.data.origin),
        lotNumber: new FormControl(this.data.lotNumber),
        qty: new FormControl(this.data.qty),
        pcs: new FormControl(this.data.pcs),
        totalQty: new FormControl(this.data.totalQty),
        storage: new FormControl(this.data.storage),
        customStorage: new FormControl(this.data.customStorage),
        detailStorage: new FormControl(this.data.detailStorage),
        storedUntil: new FormControl(this.data.storedUntil),
        usage: new FormControl(this.data.usage),
        pic: new FormControl(this.data.pic),
        mstSectionId: new FormControl(this.data.mstSectionId),
        email: new FormControl(this.data.email),
        nameTr: new FormControl(this.data.nameTr),
      })
      this.previewImage = `https://myapps.aio.co.id/stock-opname-api//${this.data.photo}`
      this.previewDoc = `https://myapps.aio.co.id/stock-opname-api//${this.data.supportingDoc}`
      this.path = `https://myapps.aio.co.id/stock-opname-api${this.data.supportingDoc}`
      // this.previewImage = `http://192.168.144.81:3121//${this.data.photo}`
      // this.previewDoc = `http://192.168.144.81:3121//${this.data.supportingDoc}`
      // this.path = `http://192.168.144.81:3121${this.data.supportingDoc}`
      if (this.formUpdateMaster.value.storedUntil != null) {
        this.dateStoredUntil = new Date(this.formUpdateMaster.value.storedUntil).toISOString().substring(0, 10);
      }
    })
    this.form = new FormGroup({
      mstToolId: new FormControl(this.params),
      date: new FormControl(''),
      consume: new FormControl(''),
      usage: new FormControl(''),
      nameTr: new FormControl(''),
    })
    this.formFilter = new FormGroup({
      mstToolId: new FormControl(this.params),
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
    this.MasterService.showTransactionTools(id).subscribe((res: any) => {
      this.dataModal = res;
      this.dateUpdate = this.dataModal.date;
      this.dateUpdate = this.dateUpdate.substring(0, 10);
      this.formUpdate = new FormGroup({
        mstToolId: new FormControl(this.dataModal.mstToolId),
        date: new FormControl(this.dateUpdate),
        consume: new FormControl(this.dataModal.consume),
        usage: new FormControl(this.dataModal.usage),
        nameTr: new FormControl(this.dataModal.nameTr)
      })
    })
  }

  storeData() {
    this.date = new Date().toISOString().substring(0, 10);
    this.date2 = new Date().toISOString().substring(0, 10);
    this.form.value.mstToolId = parseInt(this.form.value.mstToolId);
    this.MasterService.createTransactionTools(this.form.value).subscribe((res: any) => {
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

  updateData() {
    this.date = new Date().toISOString().substring(0, 10);
    this.date2 = new Date().toISOString().substring(0, 10);
    this.formUpdate.value.mstToolId = parseInt(this.formUpdate.value.mstToolId);
    this.MasterService.updateTransactionTools(this.dataModal.id, this.formUpdate.value).subscribe((res: any) => {
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
    this.date = new Date().toISOString().substring(0, 10);
    this.date2 = new Date().toISOString().substring(0, 10);
    this.MasterService.deleteTransactionTools(id).subscribe((res: any) => {
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
    this.date = new Date().toISOString().substring(0, 10);
    this.date2 = new Date().toISOString().substring(0, 10);
    this.MasterService.filterBydateTools(this.formFilter.value).subscribe((res: any) => {
      this.dataTrTools = res;
      this.dataTrTools.map((item: any) => {
        item.index = this.dataTrTools.indexOf(item) + 1;
      })
    })
  }
  processSupportingDoc(event: any) {
    this.supportingDoc = event.target.files[0];
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
    this.formUpdateMaster.value.mstSectionId = Number(this.formUpdateMaster.value.mstSectionId);

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
    this.MasterService.updateTools(this.params, formData).subscribe((res: any) => {
      this.ngOnInit();
      this.alert = true;
      this.alertType = 'alert-success';
      this.alertMessage = "Data berhasil diubah";
      setTimeout(() => {
        this.alert = false;
        this.alertType = '';
        this.alertMessage = '';
      }, 1500);
    });
  }
}
