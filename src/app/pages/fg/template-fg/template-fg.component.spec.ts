import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFgComponent } from './template-fg.component';

describe('TemplateFgComponent', () => {
  let component: TemplateFgComponent;
  let fixture: ComponentFixture<TemplateFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
