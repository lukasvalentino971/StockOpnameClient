import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrMaterialComponent } from './tr-material.component';

describe('TrMaterialComponent', () => {
  let component: TrMaterialComponent;
  let fixture: ComponentFixture<TrMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
