import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProMunimOTPComponent } from './pro-munim-otp.component';

describe('ProMunimOTPComponent', () => {
  let component: ProMunimOTPComponent;
  let fixture: ComponentFixture<ProMunimOTPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProMunimOTPComponent]
    });
    fixture = TestBed.createComponent(ProMunimOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
