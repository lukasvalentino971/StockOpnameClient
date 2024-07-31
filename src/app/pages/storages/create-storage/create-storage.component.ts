import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-storage',
  templateUrl: './create-storage.component.html',
  styleUrls: ['./create-storage.component.css']
})
export class CreateStorageComponent implements OnInit{
  constructor(private MasterService: MasterService, private Router: Router) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
    })
  }

  submit() {
    this.MasterService.createStorage(this.form.value).subscribe((res) => {
      this.Router.navigateByUrl('/storage');
    })
  }
}
