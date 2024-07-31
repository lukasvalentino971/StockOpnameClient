import { Router } from '@angular/router';
import { MasterService } from './../../../services/master/master.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-section',
  templateUrl: './update-section.component.html',
  styleUrls: ['./update-section.component.css']
})
export class UpdateSectionComponent implements OnInit {

  constructor(private MasterService: MasterService, private Router: Router) { }

  form!: FormGroup;
  data: any;
  params = this.Router.url.split('/')[3];

  isLoading: boolean = true;
  ngOnInit() {
    this.MasterService.showSection(this.params).subscribe((res) => {
      this.data = res;
      this.isLoading = false;
      this.form = new FormGroup({
        id: new FormControl(this.data.id),
        name: new FormControl(this.data.name, Validators.required),
        code: new FormControl(this.data.code, Validators.required)
      })
    })
  }

  submit() {
    this.MasterService.updateSection(this.params, this.form.value).subscribe((res) => {
      this.Router.navigateByUrl('/section');
    })
  }

}
