import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { RouterModule, Routes } from '@angular/router';

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
   }

 // *****************  auth login routes *********************************************
];

@NgModule({
  declarations: [AuthComponent, AuthLoginComponent, AuthSignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthModule { }
