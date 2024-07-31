import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-transaction-tools',
  templateUrl: './form-transaction-tools.component.html',
  styleUrls: ['./form-transaction-tools.component.css']
})
export class FormTransactionToolsComponent implements OnInit {
  constructor(private Router: Router, private MasterService: MasterService) { }

  form!: FormGroup;
  data: any;
  params = this.Router.url.split('/')[3];
  date: any;

  isLoading: boolean = true;

  ngOnInit() {
    this.date = new Date().toISOString().substring(0, 10);
    this.MasterService.showTools(this.params).subscribe(res => {
      this.data = res;
      this.isLoading = false;
    })
    this.form = new FormGroup({
      mstToolId: new FormControl(this.params),
      date: new FormControl(this.date),
      consume: new FormControl(''),
      usage: new FormControl(''),
    })
  }
  storeData() {
    this.form.value.mstToolId = parseInt(this.form.value.mstToolId);
    this.MasterService.createTransactionTools(this.form.value).subscribe((res: any) => {
      this.Router.navigateByUrl('/tools/' + this.params);
    })
  }
}
