import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPackagingComponent } from './index-packaging.component';

describe('IndexPackagingComponent', () => {
  let component: IndexPackagingComponent;
  let fixture: ComponentFixture<IndexPackagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPackagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
