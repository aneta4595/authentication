import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControlNameComponent } from './components/form-control-name/form-control-name.component';
import { FormControlAgeComponent } from './components/form-control-age/form-control-age.component';
import { FormControlEmailComponent } from './components/form-control-email/form-control-email.component';
import { FormControlCommentComponent } from './components/form-control-comment/form-control-comment.component';
import { SuccessComponent } from './components/success/success.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthenticationLoginFormComponent } from './components/authentication-login-form/authentication-login-form.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthenticationRegisterFormComponent } from './components/authentication-register-form/authentication-register-form.component';
import { BackendValidationComponent } from './components/backend-validation/backend-validation.component';
import { FormControlNameComponentModule } from './components/form-control-name/form-control-name.component-module';
import { FormControlAgeComponentModule } from './components/form-control-age/form-control-age.component-module';
import { FormControlEmailComponentModule } from './components/form-control-email/form-control-email.component-module';
import { FormControlCommentComponentModule } from './components/form-control-comment/form-control-comment.component-module';
import { SuccessComponentModule } from './components/success/success.component-module';
import { ErrorComponentModule } from './components/error/error.component-module';
import { AuthenticationLoginFormComponentModule } from './components/authentication-login-form/authentication-login-form.component-module';
import { HomePageComponentModule } from './components/home-page/home-page.component-module';
import { AuthenticationRegisterFormComponentModule } from './components/authentication-register-form/authentication-register-form.component-module';
import { BackendValidationComponentModule } from './components/backend-validation/backend-validation.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'form-control-name', component: FormControlNameComponent },
      { path: 'form-control-age', component: FormControlAgeComponent },
      { path: 'form-control-email', component: FormControlEmailComponent },
      { path: 'form-control-comment', component: FormControlCommentComponent },
      { path: 'success', component: SuccessComponent },
      { path: 'error', component: ErrorComponent },
      { path: 'login-form', component: AuthenticationLoginFormComponent },
      { path: '', component: HomePageComponent },
      { path: 'register', component: AuthenticationRegisterFormComponent },
      { path: 'backend-validation', component: BackendValidationComponent }
    ]),
    FormControlNameComponentModule,
    FormControlAgeComponentModule,
    FormControlEmailComponentModule,
    FormControlCommentComponentModule,
    SuccessComponentModule,
    ErrorComponentModule,
    AuthenticationLoginFormComponentModule,
    HomePageComponentModule,
    AuthenticationRegisterFormComponentModule,
    BackendValidationComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
