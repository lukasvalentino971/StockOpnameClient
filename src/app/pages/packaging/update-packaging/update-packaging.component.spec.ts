import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePackagingComponent } from './update-packaging.component';

describe('UpdatePackagingComponent', () => {
  let component: UpdatePackagingComponent;
  let fixture: ComponentFixture<UpdatePackagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePackagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
