import { Component, OnInit } from '@angular/core';
import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  constructor(private MasterService: MasterService, private Router: Router) { }

  form!: FormGroup;
  section: any;

  ngOnInit(): void {
    this.MasterService.getSection().subscribe((res: any) => {
      this.section = res;
    })
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      sectionId: new FormControl(''),
      email: new FormControl('', Validators.required),
      nik: new FormControl('', Validators.required),
    })
  }

  submit(): void {
    this.MasterService.createEmailUser(this.form.value).subscribe((res) => {
      this.Router.navigateByUrl('/technical-user');
    })
  }
}
