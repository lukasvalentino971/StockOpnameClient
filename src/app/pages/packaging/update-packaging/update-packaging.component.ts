import { forkJoin } from 'rxjs';
import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-packaging',
  templateUrl: './update-packaging.component.html',
  styleUrls: ['./update-packaging.component.css']
})
export class UpdatePackagingComponent implements OnInit {

  constructor(private Router: Router, private MasterService: MasterService) { }

  dataPackaging: any;
  form!: FormGroup;
  section: any;

  date: any

  photo!: File;
  previewImage: any;

  params = this.Router.url.split('/')[3];

  previewDoc: any;
  supportingDoc!: File;
  storages: any;

  isLoading: boolean = true;

  trPackaging: any;
  totalConsume: number = 0;

  ngOnInit() {
    this.date = new Date().toISOString().substring(0, 10);
    this.MasterService.getSection().subscribe((res: any) => {
      this.section = res;
    })
    forkJoin([
      this.MasterService.showPackaging(this.params),
      this.MasterService.getSection(),
      this.MasterService.getStorage(),
      this.MasterService.getTransactionPackaging(this.params)
    ]).subscribe(([res, section, storage, trPackaging]: any) => {
      this.dataPackaging = res;
      this.section = section;
      this.storages = storage;
      this.isLoading = false;

      this.form = new FormGroup({
        name: new FormControl(this.dataPackaging.name),
        supplier: new FormControl(this.dataPackaging.supplier),
        usage: new FormControl(this.dataPackaging.usage),
        lotNumber: new FormControl(this.dataPackaging.lotNumber),
        qty: new FormControl(this.dataPackaging.qty),
        pcs: new FormControl(this.dataPackaging.pcs),
        totalQty: new FormControl(this.dataPackaging.totalQty),
        storage: new FormControl(this.dataPackaging.storage),
        customStorage: new FormControl(this.dataPackaging.customStorage),
        detailStorage: new FormControl(this.dataPackaging.detailStorage),
        storedUntil: new FormControl(this.date),
        pic: new FormControl(this.dataPackaging.pic),
        mstSectionId: new FormControl(this.dataPackaging.mstSectionId),
        unit: new FormControl(this.dataPackaging.unit),
        email: new FormControl(this.dataPackaging.email),
        minStock: new FormControl(this.dataPackaging.minStock),
      })

      this.previewImage = `https://myapps.aio.co.id/stock-opname-api/${this.dataPackaging.photo}`
      // this.previewImage = `http://192.168.144.81:3121/${this.dataPackaging.photo}`
      if (this.dataPackaging.supportingDoc !== '-') {
        // this.previewDoc = `http://192.168.144.81:3121/${this.dataPackaging.supportingDoc}`
        this.previewDoc = `https://myapps.aio.co.id/stock-opname-api/${this.dataPackaging.supportingDoc}`
      }

      if (this.form.value.storedUntil != null) {
        this.date = new Date(this.form.value.storedUntil).toISOString().substring(0, 10);
      }

      this.trPackaging = trPackaging;
      this.trPackaging.forEach((element: any) => {
        this.totalConsume += element.consume;
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
        this.form.patchValue({
          image: reader.result,
          url: reader.result
        })
      }
    }
  }

  submit() {
    this.form.value.mstSectionId = Number(this.form.value.mstSectionId);

    // filter value form that not null or empty
    Object.keys(this.form.value).forEach(key => {
      if (this.form.value[key] === null || this.form.value[key] === '') {
        delete this.form.value[key];
      }
    })
    const formData = new FormData();
    // convert this.form.value to formData
    Object.keys(this.form.value).forEach(key => {
      formData.append(key, this.form.value[key]);
    })
    // append photo to formData
    if (this.photo) {
      formData.append('photo', this.photo, this.photo.name);
    }
    if (this.supportingDoc) {
      formData.append('supportingDoc', this.supportingDoc, this.supportingDoc.name);
    }
    this.MasterService.updatePackaging(this.params, formData).subscribe((res: any) => {
      this.Router.navigateByUrl('/packaging');
    });
  }
}
