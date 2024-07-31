import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTransactionPackagingComponent } from './form-transaction-packaging.component';

describe('FormTransactionPackagingComponent', () => {
  let component: FormTransactionPackagingComponent;
  let fixture: ComponentFixture<FormTransactionPackagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTransactionPackagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTransactionPackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
