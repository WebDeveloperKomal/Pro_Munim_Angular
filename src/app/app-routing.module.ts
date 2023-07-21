import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ProMunimLoginComponent } from './Components/pro-munim-login/pro-munim-login.component';
import { ProMunimOTPComponent } from './Components/pro-munim-otp/pro-munim-otp.component';
import { OverviewFNComponent } from './Components/overview-fn/overview-fn.component';
import { FeesandPaymentComponent } from './Components/feesand-payment/feesand-payment.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';


const routes: Routes = [
  {
    path:"", component: HomepageComponent
  },
{
path:"header" , component : HeaderComponent
},
{
  path: "sidenav" , component : SidenavComponent
},
  {
    path: "Pro_Munim_Login" , component:ProMunimLoginComponent
  },
  {
    path:"Pro_Munim_OTP" , component: ProMunimOTPComponent
  },
  {
    path: "OverviewFN" , component : OverviewFNComponent
  },
  {
    path: "Fees&Payment" , component : FeesandPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
