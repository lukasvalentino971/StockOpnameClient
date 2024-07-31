import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-update-fg',
  templateUrl: './update-fg.component.html',
  styleUrls: ['./update-fg.component.css']
})
export class UpdateFgComponent implements OnInit {

  constructor(private Router: Router, private MasterService: MasterService) { }

  params = this.Router.url.split('/')[3];

  dataFg: any;
  forms!: FormGroup;
  dataSection: any;


  photo!: File;
  previewImage: any;
  date: any

  supportingDoc!: File;
  previewDoc: any;
  storages: any;

  isLoading: boolean = true;
  transactionFg: any;
  totalConsume: number = 0;
  totalQty: number = 0;

  ngOnInit() {
    forkJoin([
      this.MasterService.showFG(this.params),
      this.MasterService.getSection(),
      this.MasterService.getStorage(),
      this.MasterService.getTransactionFG(this.params)
    ]).subscribe(([res, section, storage, trFg]: any) => {
      this.dataFg = res;

      this.forms = new FormGroup({
        name: new FormControl(this.dataFg.name, Validators.required),
        line: new FormControl(this.dataFg.line, Validators.required),
        qty: new FormControl(this.dataFg.qty, Validators.required),
        lotNumber: new FormControl(this.dataFg.lotNumber, Validators.required),
        pcs: new FormControl(this.dataFg.pcs, Validators.required),
        totalQty: new FormControl(this.dataFg.totalQty, Validators.required),
        storage: new FormControl(this.dataFg.storage, Validators.required),
        customStorage: new FormControl(this.dataFg.customStorage, Validators.required),
        detailStorage: new FormControl(this.dataFg.detailStorage, Validators.required),
        storedUntil: new FormControl(this.dataFg.storedUntil, Validators.required),
        usage: new FormControl(this.dataFg.usage, Validators.required),
        pic: new FormControl(this.dataFg.pic, Validators.required),
        email: new FormControl(this.dataFg.email, Validators.required),
        mstSectionId: new FormControl(this.dataFg.mstSectionId, Validators.required),
        minStock: new FormControl(this.dataFg.minStock, Validators.required),
      })
        console.log(this.dataFg);

      this.storages = storage;
      this.previewImage = `https://myapps.aio.co.id/stock-opname-api//${this.dataFg.photo}`
      this.previewDoc = `https://myapps.aio.co.id/stock-opname-api//${this.dataFg.supportingDoc}`
      // this.previewImage = `http://192.168.144.81:3121/${this.dataFg.photo}`
      // this.previewDoc = `http://192.168.144.81:3121/${this.dataFg.supportingDoc}`

      if (this.forms.value.storedUntil != null) {
        this.date = new Date(this.forms.value.storedUntil).toISOString().substring(0, 10);
      }
      this.dataSection = section;

      this.transactionFg = trFg;
      this.transactionFg.forEach((element: any) => {
        this.totalConsume += element.consume;
      })
      this.totalQty = this.forms.value.pcs * this.forms.value.qty;


      this.isLoading = false;

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
        this.forms.patchValue({
          image: reader.result,
          url: reader.result
        })
      }
    }
  }
  submit() {
    this.forms.value.mstSectionId = parseInt(this.forms.value.mstSectionId);
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
    this.MasterService.updateFG(this.params, formData).subscribe((res: any) => {
      this.Router.navigateByUrl('/fg');
    })
  }
}
