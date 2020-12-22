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


@NgModule({
  declarations: [
    AppComponent,
    AccessPaymentComponent,
    HomeComponent
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
