import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-transaction-packaging',
  templateUrl: './form-transaction-packaging.component.html',
  styleUrls: ['./form-transaction-packaging.component.css']
})
export class FormTransactionPackagingComponent implements OnInit{
  constructor(private Router: Router, private MasterService: MasterService) { }

  form!: FormGroup;
  data: any;
  params = this.Router.url.split('/')[3];
  date: any;

  isLoading: boolean = true;
  ngOnInit() {
    this.date = new Date().toISOString().substring(0, 10);
    this.MasterService.showPackaging(this.params).subscribe(res => {
      this.data = res;
      this.isLoading = false;
    })
    this.form = new FormGroup({
      mstPackagingId: new FormControl(this.params),
      date: new FormControl(this.date),
      consume: new FormControl(''),
      usage: new FormControl(''),
    })
  }
  storeData() {
    this.form.value.mstPackagingId = parseInt(this.form.value.mstPackagingId);
    this.MasterService.createTransactionPackaging(this.form.value).subscribe((res: any) => {
      this.Router.navigateByUrl('/packaging/' + this.params);
    })
  }
}
