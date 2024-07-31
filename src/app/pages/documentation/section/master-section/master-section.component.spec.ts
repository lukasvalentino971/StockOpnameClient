import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSectionComponent } from './master-section.component';

describe('MasterSectionComponent', () => {
  let component: MasterSectionComponent;
  let fixture: ComponentFixture<MasterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
