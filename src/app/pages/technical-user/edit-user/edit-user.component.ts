import { Router } from '@angular/router';
import { MasterService } from './../../../services/master/master.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  constructor(private MasterService: MasterService, private Router: Router) { }

  form!: FormGroup;
  data: any;
  params = this.Router.url.split('/')[3];
  section: any;

  isLoading: boolean = true;

  ngOnInit(): void {
    this.MasterService.showEmailUser(this.params).subscribe((res) => {
      this.data = res;
      this.isLoading = false;
      this.form = new FormGroup({
        id: new FormControl(this.data.id),
        name: new FormControl(this.data.name, Validators.required),
        nik: new FormControl(this.data.nik, Validators.required),
        email: new FormControl(this.data.email, Validators.required),
        sectionId: new FormControl(this.data.sectionId, Validators.required),
      })
    })

    this.MasterService.getSection().subscribe((res: any) => {
      this.section = res;
    })
  }

  submit() {
    this.MasterService.updateEmailUser(this.form.value ,this.params).subscribe((res) => {
      console.log('Response:', res);
      this.Router.navigateByUrl('/technical-user')
      
    })
  }
}
