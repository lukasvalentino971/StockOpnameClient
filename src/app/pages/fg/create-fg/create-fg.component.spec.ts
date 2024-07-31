import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFgComponent } from './create-fg.component';

describe('CreateFgComponent', () => {
  let component: CreateFgComponent;
  let fixture: ComponentFixture<CreateFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
