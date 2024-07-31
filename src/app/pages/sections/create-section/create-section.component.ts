import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.css']
})
export class CreateSectionComponent implements OnInit {

  constructor(private MasterService: MasterService, private Router: Router) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required)
    })
  }

  submit() {
    this.MasterService.createSection(this.form.value).subscribe((res) => {
      this.Router.navigateByUrl('/section');
    })
  }

}
