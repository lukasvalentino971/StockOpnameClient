import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFgComponent } from './detail-fg.component';

describe('DetailFgComponent', () => {
  let component: DetailFgComponent;
  let fixture: ComponentFixture<DetailFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
