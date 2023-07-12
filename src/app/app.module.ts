import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ProMunimLoginComponent } from './Components/pro-munim-login/pro-munim-login.component';
import { ProMunimOTPComponent } from './Components/pro-munim-otp/pro-munim-otp.component';
import { OverviewFNComponent } from './Components/overview-fn/overview-fn.component';
import { FeesandPaymentComponent } from './Components/feesand-payment/feesand-payment.component';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProMunimLoginComponent,
    ProMunimOTPComponent,
    OverviewFNComponent,
    FeesandPaymentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
