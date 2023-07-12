import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProMunimLoginComponent } from './pro-munim-login.component';

describe('ProMunimLoginComponent', () => {
  let component: ProMunimLoginComponent;
  let fixture: ComponentFixture<ProMunimLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProMunimLoginComponent]
    });
    fixture = TestBed.createComponent(ProMunimLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
