import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterToolsComponent } from './master-tools.component';

describe('MasterToolsComponent', () => {
  let component: MasterToolsComponent;
  let fixture: ComponentFixture<MasterToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
