import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexStorageComponent } from './index-storage.component';

describe('IndexStorageComponent', () => {
  let component: IndexStorageComponent;
  let fixture: ComponentFixture<IndexStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
