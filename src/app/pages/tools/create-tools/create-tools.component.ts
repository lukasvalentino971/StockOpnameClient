import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-create-tools',
  templateUrl: './create-tools.component.html',
  styleUrls: ['./create-tools.component.css']
})
export class CreateToolsComponent implements OnInit {
  constructor(private router: Router, private masterService: MasterService) { }

  section: any;
  form!: FormGroup;

  date: any;

  photo!: File;
  previewImage: any;

  supportingDoc!: File;
  storages: any;
  existingData: any;

  // Filter and Pagination
  itemsPerPage: number = 10;
  p: number = 1;
  term: any;

  listUser: any;

  isPicSelected: boolean = false;

  ngOnInit() {
    this.date = new Date().toISOString().substring(0, 10);
    this.masterService.getSection().subscribe((res: any) => {
      this.section = res;
    })
    this.masterService.getTools().subscribe((res: any) => {
      this.existingData = res;
    })
    this.masterService.getStorage().subscribe((res: any) => {
      this.storages = res;
    })
    this.masterService.getEmailUser().subscribe((res: any) => {
      this.listUser = res;
    })

    this.form = new FormGroup({
      name: new FormControl(''),
      supplier: new FormControl(''),
      origin: new FormControl(''),
      lotNumber: new FormControl(''),
      qty: new FormControl(1),
      pcs: new FormControl(1),
      totalQty: new FormControl(''),
      storage: new FormControl('Gudang RM FSB'),
      customStorage: new FormControl(''),
      detailStorage: new FormControl(''),
      storedUntil: new FormControl(this.date),
      usage: new FormControl(''),
      pic: new FormControl(''),
      mstSectionId: new FormControl(1),
      email: new FormControl(''),
      minStock: new FormControl(1),
    })
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
  processSupportingDoc(event: any) {
    this.supportingDoc = event.target.files[0];
  }

  updateValue(id: any) {
    this.masterService.showTools(id).subscribe((res: any) => {
      this.form.patchValue({
        name: res.name,
        supplier: res.supplier,
        origin: res.origin,
        lotNumber: res.lotNumber,
        qty: res.qty,
        pcs: res.pcs,
        totalQty: res.totalQty,
        storage: res.storage,
        customStorage: res.customStorage,
        detailStorage: res.detailStorage,
        storedUntil: res.storedUntil,
        usage: res.usage,
        pic: res.pic,
        mstSectionId: res.mstSectionId,
        email: res.email,
        minStock: res.minStock,
      })
    })
  }

  onPicChange(event: Event) {
    const selectedPic = (event.target as HTMLInputElement).value;
    if (selectedPic) {
      const selectedUser: User | undefined = this.listUser.find((user: User) => user.name === selectedPic);
      if (selectedUser) {
        this.form.get('email')?.setValue(selectedUser.email);
        this.isPicSelected = true;
      }
    } else {
      this.form.get('email')?.setValue('');
      this.isPicSelected = false;
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
    this.masterService.createTools(formData).subscribe((res: any) => {
      this.router.navigate(['/tools']);
    })
  }

}
