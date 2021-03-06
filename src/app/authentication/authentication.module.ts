import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthenticationService } from './authentication.service';
import {ToastyModule} from 'ng2-toasty';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          breadcrumb: 'Login'
        }
      },
      {
        path: 'forgot_password',
        component: ForgetPasswordComponent,
        data: {
          breadcrumb: 'forgot'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    FormsModule,
    ReactiveFormsModule,
    ToastyModule.forRoot()
  ],
  declarations: [LoginComponent, 
    ForgetPasswordComponent],
  providers: [AuthenticationService]
})
export class AuthenticationModule { }
