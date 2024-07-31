import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDocumentationComponent } from './index-documentation.component';

describe('IndexDocumentationComponent', () => {
  let component: IndexDocumentationComponent;
  let fixture: ComponentFixture<IndexDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexDocumentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
