import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePackagingComponent } from './template-packaging.component';

describe('TemplatePackagingComponent', () => {
  let component: TemplatePackagingComponent;
  let fixture: ComponentFixture<TemplatePackagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatePackagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatePackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
