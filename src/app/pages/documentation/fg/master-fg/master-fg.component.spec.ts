import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterFgComponent } from './master-fg.component';

describe('MasterFgComponent', () => {
  let component: MasterFgComponent;
  let fixture: ComponentFixture<MasterFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterFgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
