import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { RouterModule, Routes } from '@angular/router';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/utils/guards/auth-guard';
import { VerifyGuard } from 'src/app/utils/guards/verify-guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UnAuthGuard } from 'src/app/utils/guards/un-auth-guard';
import { Interceptor } from 'src/app/utils/interceptor/auth-interceptor';
import { ErrorInterceptor } from 'src/app/utils/interceptor/error-interceptor';


const authRoutes: Routes = [
  // *****************  auth home which includes the auth login *******************************
  {
      path: '',
      redirectTo: '/auth/auth-login',
      pathMatch: 'full'
  },
  // *****************  auth home which includes the auth login *******************************


  // *****************  auth login routes ********************************************
   {
     path: 'auth-login',
     component: AuthLoginComponent
   },

  // *****************  auth login routes *********************************************


   // *****************  auth login routes ********************************************
   {
    path: 'auth-signup',
    component: AuthSignupComponent
   },

 // *****************  auth login routes *********************************************

  // *****************  email verification routes ********************************************
  // {
  //   path: 'verify-email',
    
  //   component: EmailVerificationComponent
  //  }

 // *****************   email verification routes *********************************************
];

@NgModule({
  declarations: [AuthComponent, AuthLoginComponent, AuthSignupComponent, EmailVerificationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    NgxIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [AuthGuard, VerifyGuard, UnAuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
})
export class AuthModule { }
