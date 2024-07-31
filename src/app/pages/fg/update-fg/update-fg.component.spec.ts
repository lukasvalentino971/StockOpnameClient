import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFgComponent } from './update-fg.component';

describe('UpdateFgComponent', () => {
  let component: UpdateFgComponent;
  let fixture: ComponentFixture<UpdateFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
