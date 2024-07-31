import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailToolsComponent } from './detail-tools.component';

describe('DetailToolsComponent', () => {
  let component: DetailToolsComponent;
  let fixture: ComponentFixture<DetailToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
