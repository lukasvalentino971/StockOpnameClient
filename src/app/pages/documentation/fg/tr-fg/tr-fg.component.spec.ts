import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrFgComponent } from './tr-fg.component';

describe('TrFgComponent', () => {
  let component: TrFgComponent;
  let fixture: ComponentFixture<TrFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrFgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
