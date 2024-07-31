import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationFgIndexComponent } from './documentation-fg-index.component';

describe('DocumentationFgIndexComponent', () => {
  let component: DocumentationFgIndexComponent;
  let fixture: ComponentFixture<DocumentationFgIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationFgIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationFgIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
