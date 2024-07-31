import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateToolsComponent } from './template-tools.component';

describe('TemplateToolsComponent', () => {
  let component: TemplateToolsComponent;
  let fixture: ComponentFixture<TemplateToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
