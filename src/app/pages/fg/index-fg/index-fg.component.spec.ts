import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFgComponent } from './index-fg.component';

describe('IndexFgComponent', () => {
  let component: IndexFgComponent;
  let fixture: ComponentFixture<IndexFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexFgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
