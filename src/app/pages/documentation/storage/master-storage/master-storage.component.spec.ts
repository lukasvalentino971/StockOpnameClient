import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterStorageComponent } from './master-storage.component';

describe('MasterStorageComponent', () => {
  let component: MasterStorageComponent;
  let fixture: ComponentFixture<MasterStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
