import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPackagingComponent } from './master-packaging.component';

describe('MasterPackagingComponent', () => {
  let component: MasterPackagingComponent;
  let fixture: ComponentFixture<MasterPackagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPackagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterPackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
