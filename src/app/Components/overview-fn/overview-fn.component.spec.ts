import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewFNComponent } from './overview-fn.component';

describe('OverviewFNComponent', () => {
  let component: OverviewFNComponent;
  let fixture: ComponentFixture<OverviewFNComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewFNComponent]
    });
    fixture = TestBed.createComponent(OverviewFNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
