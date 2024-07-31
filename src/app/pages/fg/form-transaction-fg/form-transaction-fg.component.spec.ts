import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTransactionFgComponent } from './form-transaction-fg.component';

describe('FormTransactionFgComponent', () => {
  let component: FormTransactionFgComponent;
  let fixture: ComponentFixture<FormTransactionFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTransactionFgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTransactionFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
