import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrToolsComponent } from './tr-tools.component';

describe('TrToolsComponent', () => {
  let component: TrToolsComponent;
  let fixture: ComponentFixture<TrToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
