import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationMaterialIndexComponent } from './documentation-material-index.component';

describe('DocumentationMaterialIndexComponent', () => {
  let component: DocumentationMaterialIndexComponent;
  let fixture: ComponentFixture<DocumentationMaterialIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationMaterialIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationMaterialIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
