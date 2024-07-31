import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexToolsComponent } from './index-tools.component';

describe('IndexToolsComponent', () => {
  let component: IndexToolsComponent;
  let fixture: ComponentFixture<IndexToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
