import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePackagingComponent } from './create-packaging.component';

describe('CreatePackagingComponent', () => {
  let component: CreatePackagingComponent;
  let fixture: ComponentFixture<CreatePackagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePackagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
