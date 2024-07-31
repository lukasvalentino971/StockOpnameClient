import { AuthService } from './../../../services/auth/auth.service';
import { forkJoin } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-material',
  templateUrl: './detail-material.component.html',
  styleUrls: ['./detail-material.component.css']
})
export class DetailMaterialComponent implements OnInit {

  constructor(private Router: Router, private MasterService: MasterService, private AuthService: AuthService) {
  }
  date: any;
  date2: any;
  dateUpdate: any

  // Filter and Pagination
  itemsPerPage: number = 10;
  p: number = 1;
  term: any;

  params = this.Router.url.split('/')[2];

  data: any;
  dataTrMaterial: any;
  dataSection: any;

  dateStoredUntil: any
  dateExpiredDate: any


  dataModal: any;

  form!: FormGroup;
  formUpdate!: FormGroup;
  formUpdateMaster!: FormGroup;

  // alert
  alert: boolean = false;
  alertType: any;
  alertMessage: any;

  // Filter by date
  formFilter!: FormGroup;

  photo!: File;
  previewImage: any;
  storages: any
  path: any
  supportingDoc!: File;
  previewDoc: any;

  user: any

  isLoading: boolean = true;

  totalConsume: number = 0;

  ngOnInit(): void {
    this.user = this.AuthService.GetPayload();
    this.date = new Date().toISOString().substring(0, 10);
    this.date2 = new Date().toISOString().substring(0, 10);
    forkJoin([
      this.MasterService.showMaterial(this.params),
      this.MasterService.getTransactionMaterial(this.params),
      this.MasterService.getSection(),
      this.MasterService.getStorage(),
    ]).subscribe(([res, trMaterial, section, storage]: any) => {
      this.data = res;
      this.dataSection = section;
      this.dataTrMaterial = trMaterial;
      this.storages = storage;
      this.dataTrMaterial.map((item: any) => {
        item.index = this.dataTrMaterial.indexOf(item) + 1;
        this.totalConsume += item.consume
      })
      this.isLoading = false;
      this.formUpdateMaster = new FormGroup({
        name: new FormControl(this.data.name, Validators.required),
        manufacture: new FormControl(this.data.manufacture, Validators.required),
        supplier: new FormControl(this.data.supplier, Validators.required),
        usage: new FormControl(this.data.usage, Validators.required),
        origin: new FormControl(this.data.origin, Validators.required),
        lotNumber: new FormControl(this.data.lotNumber, Validators.required),
        expiredDate: new FormControl(this.data.expiredDate, Validators.required),
        qty: new FormControl(this.data.qty, Validators.required),
        pcs: new FormControl(this.data.pcs, Validators.required),
        totalQty: new FormControl(this.data.totalQty, Validators.required),
        storage: new FormControl(this.data.storage, Validators.required),
        customStorage: new FormControl(this.data.customStorage, Validators.required),
        detailStorage: new FormControl(this.data.detailStorage, Validators.required),
        storageTempTarget: new FormControl(this.data.storageTempTarget, Validators.required),
        storedUntil: new FormControl(this.data.storedUntil, Validators.required),
        pic: new FormControl(this.data.pic, Validators.required),
        email: new FormControl(this.data.email, Validators.required),
        mstSectionId: new FormControl(this.data.mstSectionId, Validators.required),
        nameTr: new FormControl(this.data.nameTr, Validators.required),
      })
      this.previewImage = `https://myapps.aio.co.id/stock-opname-api//${this.data.photo}`
      // this.previewImage = `http://192.168.144.81:3121//${this.data.photo}`
      this.previewDoc = `https://myapps.aio.co.id/stock-opname-api//${this.data.supportingDoc}`
      // this.previewDoc = `http://192.168.144.81:3121//${this.data.supportingDoc}`
      this.path = `https://myapps.aio.co.id/stock-opname-api/${this.data.supportingDoc}`
      // this.path = `http://192.168.144.81:3121/${this.data.supportingDoc}`
      if (this.formUpdateMaster.value.storedUntil != null) {
        this.dateStoredUntil = new Date(this.formUpdateMaster.value.storedUntil).toISOString().substring(0, 10);
        this.dateExpiredDate = new Date(this.formUpdateMaster.value.expiredDate).toISOString().substring(0, 10);
      }

    })
    this.form = new FormGroup({
      mstMaterialId: new FormControl(this.params),
      date: new FormControl(this.date),
      consume: new FormControl(''),
      usage: new FormControl(''),
      nameTr: new FormControl(''),
    })
    this.formFilter = new FormGroup({
      mstMaterialId: new FormControl(this.params),
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
  
  processSupportingDoc(event: any) {
    this.supportingDoc = event.target.files[0];
  }
  getDataModal(id: any) {
    this.MasterService.showTransactionMaterial(id).subscribe((res: any) => {
      this.dataModal = res;
      this.dateUpdate = this.dataModal.date;
      this.dateUpdate = this.dateUpdate.substring(0, 10);
      this.formUpdate = new FormGroup({
        mstMaterialId: new FormControl(this.dataModal.mstMaterialId),
        date: new FormControl(this.dateUpdate),
        consume: new FormControl(this.dataModal.consume),
        usage: new FormControl(this.dataModal.usage),
        nameTr: new FormControl(this.dataModal.nameTr),
      })
    })
  }

  storeData() {
    this.form.value.mstMaterialId = parseInt(this.form.value.mstMaterialId);
    this.MasterService.createTransactionMaterial(this.form.value).subscribe((res: any) => {
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
    this.formUpdate.value.mstMaterialId = parseInt(this.formUpdate.value.mstMaterialId);
    this.MasterService.updateTransactionMaterial(this.dataModal.id, this.formUpdate.value).subscribe((res: any) => {
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
    this.MasterService.deleteTransactionMaterial(id).subscribe((res: any) => {
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

    this.MasterService.filterBydateMaterial(this.formFilter.value).subscribe((res: any) => {
      this.dataTrMaterial = res;

      this.dataTrMaterial.map((item: any) => {
        item.index = this.dataTrMaterial.indexOf(item) + 1;
      })
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
    this.MasterService.updateMaterial(this.params, formData).subscribe((res: any) => {
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
