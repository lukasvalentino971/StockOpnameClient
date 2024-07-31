import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-transaction-material',
  templateUrl: './form-transaction-material.component.html',
  styleUrls: ['./form-transaction-material.component.css']
})
export class FormTransactionMaterialComponent implements OnInit {
  constructor(private Router: Router, private MasterService: MasterService) { }

  form!: FormGroup;
  data: any;
  params = this.Router.url.split('/')[3];
  date: any;

  isLoading: boolean = true;

  ngOnInit() {
    this.date = new Date().toISOString().substring(0, 10);
    this.MasterService.showMaterial(this.params).subscribe(res => {
      this.data = res;
      this.isLoading = false;
    })
    this.form = new FormGroup({
      mstMaterialId: new FormControl(this.params),
      date: new FormControl(this.date),
      consume: new FormControl(''),
      usage: new FormControl(''),
    })
  }
  storeData() {
    this.form.value.mstMaterialId = parseInt(this.form.value.mstMaterialId);
    this.MasterService.createTransactionMaterial(this.form.value).subscribe((res: any) => {
      this.Router.navigateByUrl('/material/' + this.params);
    })
  }
}
