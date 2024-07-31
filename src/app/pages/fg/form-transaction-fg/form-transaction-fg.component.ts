import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-transaction-fg',
  templateUrl: './form-transaction-fg.component.html',
  styleUrls: ['./form-transaction-fg.component.css']
})
export class FormTransactionFgComponent implements OnInit {

  constructor(private Router: Router, private MasterService: MasterService) { }

  form!: FormGroup;
  data: any;
  params = this.Router.url.split('/')[3];
  date: any;

  isLoading: boolean = true;

  ngOnInit() {
    this.date = new Date().toISOString().substring(0, 10);
    this.MasterService.showFG(this.params).subscribe(res => {
      this.data = res;
      this.isLoading = false;
    })
    this.form = new FormGroup({
      mstFgId: new FormControl(this.params),
      date: new FormControl(this.date),
      consume: new FormControl(''),
      usage: new FormControl(''),
    })
  }
  storeData() {
    this.form.value.mstFgId = parseInt(this.form.value.mstFgId);
    this.MasterService.createTransactionFG(this.form.value).subscribe((res: any) => {
      this.Router.navigateByUrl('/fg/' + this.params);
    })
  }

}
