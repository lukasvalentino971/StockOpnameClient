import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-update-material',
  templateUrl: './update-material.component.html',
  styleUrls: ['./update-material.component.css']
})
export class UpdateMaterialComponent implements OnInit {

  constructor(private Router: Router, private MasterService: MasterService) { }

  params = this.Router.url.split('/')[3];

  dataMaterial: any;
  forms!: FormGroup;
  dataSection: any;

  date: any
  date1: any

  photo!: File;
  previewImage: any;

  supportingDoc!: File;
  previewDoc: any;
  storages: any;

  isLoading: boolean = true;

  trMaterial: any;
  totalConsume: number = 0;

  ngOnInit() {
    forkJoin([
      this.MasterService.showMaterial(this.params),
      this.MasterService.getSection(),
      this.MasterService.getStorage(),
      this.MasterService.getTransactionMaterial(this.params)
    ]).subscribe(([res, section, storage, trMaterial]: any) => {
      this.dataMaterial = res;
      this.dataSection
      this.storages = storage
      this.isLoading = false;

      this.forms = new FormGroup({
        name: new FormControl(this.dataMaterial.name, Validators.required),
        manufacture: new FormControl(this.dataMaterial.manufacture, Validators.required),
        supplier: new FormControl(this.dataMaterial.supplier, Validators.required),
        usage: new FormControl(this.dataMaterial.usage, Validators.required),
        origin: new FormControl(this.dataMaterial.origin, Validators.required),
        lotNumber: new FormControl(this.dataMaterial.lotNumber, Validators.required),
        expiredDate: new FormControl(this.dataMaterial.expiredDate, Validators.required),
        qty: new FormControl(this.dataMaterial.qty, Validators.required),
        pcs: new FormControl(this.dataMaterial.pcs, Validators.required),
        totalQty: new FormControl(this.dataMaterial.totalQty, Validators.required),
        storage: new FormControl(this.dataMaterial.storage, Validators.required),
        customStorage: new FormControl(this.dataMaterial.customStorage, Validators.required),
        detailStorage: new FormControl(this.dataMaterial.detailStorage, Validators.required),
        storageTempTarget: new FormControl(this.dataMaterial.storageTempTarget, Validators.required),
        storedUntil: new FormControl(this.dataMaterial.storedUntil, Validators.required),
        pic: new FormControl(this.dataMaterial.pic, Validators.required),
        email: new FormControl(this.dataMaterial.email, Validators.required),
        mstSectionId: new FormControl(this.dataMaterial.mstSectionId, Validators.required),
        minStock : new FormControl(this.dataMaterial.minStock, Validators.required),
      })
      this.previewImage = `https://myapps.aio.co.id/stock-opname-api/${this.dataMaterial.photo}`
      // this.previewImage = `http://192.168.144.81:3121/${this.dataMaterial.photo}`
      if (this.dataMaterial.supportingDoc !== '-') {
        this.previewDoc = `https://myapps.aio.co.id/stock-opname-api/${this.dataMaterial.supportingDoc}`
        // this.previewDoc = `http://192.168.144.81:3121/${this.dataMaterial.supportingDoc}`
      }
      if (this.forms.value.storedUntil != null || this.forms.value.expiredDate != null) {
        this.date = new Date(this.forms.value.storedUntil).toISOString().substring(0, 10);
        this.date1 = new Date(this.forms.value.expiredDate).toISOString().substring(0, 10);
      }
      this.dataSection = section;

      this.trMaterial = trMaterial;
      this.trMaterial.forEach((element: any) => {
        this.totalConsume += element.consume
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
        this.forms.patchValue({
          image: reader.result,
          url: reader.result
        })
      }
    }
  }
  processSupportingDoc(event: any) {
    this.supportingDoc = event.target.files[0];
  }
  submit() {
    this.forms.value.mstSectionId = Number(this.forms.value.mstSectionId);

    // filter value form that not null or empty
    Object.keys(this.forms.value).forEach(key => {
      if (this.forms.value[key] === null || this.forms.value[key] === '') {
        delete this.forms.value[key];
      }
    })
    const formData = new FormData();
    // convert this.forms.value to formData
    Object.keys(this.forms.value).forEach(key => {
      formData.append(key, this.forms.value[key]);
    })
    // append photo to formData
    if (this.photo) {
      formData.append('photo', this.photo, this.photo.name);
    }
    if (this.supportingDoc) {
      formData.append('supportingDoc', this.supportingDoc, this.supportingDoc.name);
    }
    this.MasterService.updateMaterial(this.params, formData).subscribe((res: any) => {
      this.Router.navigateByUrl('/material');
    })
  }
}
