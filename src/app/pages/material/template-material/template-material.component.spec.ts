import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateMaterialComponent } from './template-material.component';

describe('TemplateMaterialComponent', () => {
  let component: TemplateMaterialComponent;
  let fixture: ComponentFixture<TemplateMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
