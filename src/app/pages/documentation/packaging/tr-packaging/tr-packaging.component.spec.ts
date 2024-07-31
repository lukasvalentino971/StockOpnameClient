import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrPackagingComponent } from './tr-packaging.component';

describe('TrPackagingComponent', () => {
  let component: TrPackagingComponent;
  let fixture: ComponentFixture<TrPackagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrPackagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrPackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
