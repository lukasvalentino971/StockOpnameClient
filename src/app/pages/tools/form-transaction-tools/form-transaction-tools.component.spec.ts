import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTransactionToolsComponent } from './form-transaction-tools.component';

describe('FormTransactionToolsComponent', () => {
  let component: FormTransactionToolsComponent;
  let fixture: ComponentFixture<FormTransactionToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTransactionToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTransactionToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
