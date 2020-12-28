import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessPaymentComponent } from './shared/access-payment/access-payment.component';
import {HomeComponent} from './pages/home/home.component';
import { TradeComponent } from './pages/trade/trade.component';

const routes: Routes = [

  // ****************** home page *****************************************
  {
    path: '',
    component: HomeComponent
  },

  // ****************** home page *****************************************

  // ****************** trade page *****************************************
  {
    path: 'trade',
    component: TradeComponent
  },

  // ****************** trade page *****************************************

  //  ***************** auth routing module *******************************
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module')
                          .then(m => m.AuthModule)

  },
  //  ***************** auth routing module *******************************

  // *********************** access payment route ************************

  {
    path: 'payment-view',
    component: AccessPaymentComponent
  }

  // *********************** access payment route ************************
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
