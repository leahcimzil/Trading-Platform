import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { TradeComponent } from '../dashboard/trade/trade.component';
import { TransactionHistoryComponent } from '../dashboard/transaction-history/transaction-history.component';
import { AccountComponent } from '../dashboard/account/account.component';
import { AnalysisComponent } from '../dashboard/analysis/analysis.component';
import { DepositComponent } from '../dashboard/deposit/deposit.component';
import { WithdrawComponent } from '../dashboard/withdraw/withdraw.component';
import { SideBarComponent } from '../dashboard/side-bar/side-bar.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { AuthGuard } from 'src/app/utils/guards/auth-guard';
import { VerifyGuard } from 'src/app/utils/guards/verify-guard';
import { UnAuthGuard } from 'src/app/utils/guards/un-auth-guard';
import { Interceptor } from 'src/app/utils/interceptor/auth-interceptor';
import { ErrorInterceptor } from 'src/app/utils/interceptor/error-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';




export const dashboardRoutes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: 'trade',
      component: TradeComponent
    },
    {
      path: 'transaction-history',
      component: TransactionHistoryComponent
    },
    {
        path: 'account',
        component: AccountComponent
    },
    {
      path: 'analysis',
      component: AnalysisComponent
    },
    {
      path: 'deposit',
      component: DepositComponent
    },
    {
      path: 'withdraw',
      component: WithdrawComponent
    }
  ]
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    NgxIntlTelInputModule,
  ],
  declarations: [
    DashboardComponent,
    TradeComponent,
    TransactionHistoryComponent,
    AccountComponent,
    AnalysisComponent,
    DepositComponent,
    WithdrawComponent,
    SideBarComponent
  ],
  exports: [RouterModule],
  providers: [AuthGuard, VerifyGuard, UnAuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
})
export class DashboardModule { }
