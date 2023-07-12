import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesandPaymentComponent } from './feesand-payment.component';

describe('FeesandPaymentComponent', () => {
  let component: FeesandPaymentComponent;
  let fixture: ComponentFixture<FeesandPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeesandPaymentComponent]
    });
    fixture = TestBed.createComponent(FeesandPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
