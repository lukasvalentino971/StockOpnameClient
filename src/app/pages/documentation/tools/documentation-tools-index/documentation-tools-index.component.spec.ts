import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationToolsIndexComponent } from './documentation-tools-index.component';

describe('DocumentationToolsIndexComponent', () => {
  let component: DocumentationToolsIndexComponent;
  let fixture: ComponentFixture<DocumentationToolsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationToolsIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationToolsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
