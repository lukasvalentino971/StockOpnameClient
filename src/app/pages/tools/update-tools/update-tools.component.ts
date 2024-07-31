import { forkJoin } from 'rxjs';
import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-tools',
  templateUrl: './update-tools.component.html',
  styleUrls: ['./update-tools.component.css']
})
export class UpdateToolsComponent implements OnInit {

  constructor(private Router: Router, private MasterService: MasterService) { }

  dataTool: any;
  form!: FormGroup;
  section: any;

  date: any

  params = this.Router.url.split('/')[3];


  photo!: File;
  previewDoc: any;
  previewImage: any;
  supportingDoc!: File;
  storages: any;

  isLoading: boolean = true;

  trTool: any;
  totalConsume: number = 0;

  ngOnInit() {
    this.date = new Date().toISOString().substring(0, 10);
    // this.MasterService.getSection().subscribe((res: any) => {
    //   this.section = res;
    // })
    forkJoin([
      this.MasterService.showTools(this.params),
      this.MasterService.getSection(),
      this.MasterService.getStorage(),
      this.MasterService.getTransactionTools(this.params)
    ]).subscribe(([res, section, storage, trTool]: any) => {
      this.dataTool = res;
      this.section = section;
      this.storages = storage;
      this.isLoading = false;

      this.form = new FormGroup({
        name: new FormControl(this.dataTool.name),
        supplier: new FormControl(this.dataTool.supplier),
        origin: new FormControl(this.dataTool.origin),
        lotNumber: new FormControl(this.dataTool.lotNumber),
        qty: new FormControl(this.dataTool.qty),
        pcs: new FormControl(this.dataTool.pcs),
        totalQty: new FormControl(this.dataTool.totalQty),
        storage: new FormControl(this.dataTool.storage),
        customStorage: new FormControl(this.dataTool.customStorage),
        detailStorage: new FormControl(this.dataTool.detailStorage),
        storedUntil: new FormControl(this.dataTool.storedUntil),
        usage: new FormControl(this.dataTool.usage),
        pic: new FormControl(this.dataTool.pic),
        mstSectionId: new FormControl(this.dataTool.mstSectionId),
        email: new FormControl(this.dataTool.email),
        minStock: new FormControl(this.dataTool.minStock),
      })
      this.previewImage = `https://myapps.aio.co.id/stock-opname-api/${this.dataTool.photo}`
      // this.previewImage = `http://192.168.144.81:3121/${this.dataTool.photo}`
      this.previewDoc = `https://myapps.aio.co.id/stock-opname-api${this.dataTool.supportingDoc}`
      // this.previewDoc = `http://192.168.144.81:3121${this.dataTool.supportingDoc}`
      if (this.form.value.storedUntil != null) {
        this.date = new Date(this.form.value.storedUntil).toISOString().substring(0, 10);
      }
      this.trTool = trTool;
      this.trTool.forEach((element: any) => {
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
    this.MasterService.updateTools(this.params, formData).subscribe((res: any) => {
      this.Router.navigate(['/tools']);
    })
  }
}
