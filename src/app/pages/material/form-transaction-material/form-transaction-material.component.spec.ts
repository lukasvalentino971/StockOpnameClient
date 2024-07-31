import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTransactionMaterialComponent } from './form-transaction-material.component';

describe('FormTransactionMaterialComponent', () => {
  let component: FormTransactionMaterialComponent;
  let fixture: ComponentFixture<FormTransactionMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTransactionMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTransactionMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
