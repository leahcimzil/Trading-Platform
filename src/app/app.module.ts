import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccessPaymentComponent } from './shared/access-payment/access-payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { HomeComponent } from './pages/home/home.component';
import {AuthGuard} from './utils/guards/auth-guard';
import {VerifyGuard} from './utils/guards/verify-guard';
import {UnAuthGuard} from './utils/guards/un-auth-guard';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Interceptor} from './utils/interceptor/auth-interceptor';
import {ErrorInterceptor} from './utils/interceptor/error-interceptor';
import { TradeComponent } from './pages/trade/trade.component';
import { CompanyComponent } from './pages/company/company.component';
import { AboutUsComponent } from './pages/company/about-us/about-us.component';
import { AccountTypesComponent } from './pages/company/account-types/account-types.component';
import { TradingPlatformComponent } from './pages/company/trading-platform/trading-platform.component';
import { ContactUsComponent } from './pages/company/contact-us/contact-us.component';
import { MarketsComponent } from './pages/markets/markets.component';
import { StocksComponent } from './pages/markets/stocks/stocks.component';
import { IndicesComponent } from './pages/markets/indices/indices.component';
import { CurrencyPairsComponent } from './pages/markets/currency-pairs/currency-pairs.component';
import { TradingInformationComponent } from './pages/markets/trading-information/trading-information.component';
import { EducationComponent } from './pages/education/education.component';
import { TradingStepsComponent } from './pages/education/trading-steps/trading-steps.component';
import { FaqComponent } from './pages/education/faq/faq.component';
import { WhatIsForexComponent } from './pages/education/what-is-forex/what-is-forex.component';
import { GlossaryComponent } from './pages/education/glossary/glossary.component';
import { AnalyticalToolsComponent } from './pages/analytical-tools/analytical-tools.component';
import { RealTimeChartComponent } from './pages/analytical-tools/real-time-chart/real-time-chart.component';
import { EconomicCalenderComponent } from './pages/analytical-tools/economic-calender/economic-calender.component';
import { DividendCalenderComponent } from './pages/analytical-tools/dividend-calender/dividend-calender.component';
import { FundamentalAnalysisComponent } from './pages/analytical-tools/fundamental-analysis/fundamental-analysis.component';
import { TechnicalAnalysisComponent } from './pages/analytical-tools/technical-analysis/technical-analysis.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { TradingHoursChangesComponent } from './pages/markets/trading-hours-changes/trading-hours-changes.component';


@NgModule({
  declarations: [
    AppComponent,
    AccessPaymentComponent,
    HomeComponent,
    TradeComponent,
    CompanyComponent,
    AboutUsComponent,
    AccountTypesComponent,
    TradingPlatformComponent,
    ContactUsComponent,
    MarketsComponent,
    StocksComponent,
    IndicesComponent,
    CurrencyPairsComponent,
    TradingInformationComponent,
    EducationComponent,
    TradingStepsComponent,
    FaqComponent,
    WhatIsForexComponent,
    GlossaryComponent,
    AnalyticalToolsComponent,
    RealTimeChartComponent,
    EconomicCalenderComponent,
    DividendCalenderComponent,
    FundamentalAnalysisComponent,
    TechnicalAnalysisComponent,
    HeaderComponent,
    TradingHoursChangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgxIntlTelInputModule,
    HttpClientModule,
  ],
  providers: [AuthGuard, VerifyGuard, UnAuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
