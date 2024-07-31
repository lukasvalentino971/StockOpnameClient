import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPackagingDocumentationComponent } from './index-packaging-documentation.component';

describe('IndexPackagingDocumentationComponent', () => {
  let component: IndexPackagingDocumentationComponent;
  let fixture: ComponentFixture<IndexPackagingDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPackagingDocumentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPackagingDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
