import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMaterialComponent } from './index-material.component';

describe('IndexMaterialComponent', () => {
  let component: IndexMaterialComponent;
  let fixture: ComponentFixture<IndexMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
