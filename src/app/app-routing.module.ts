import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControlNameComponent } from './components/form-control-name/form-control-name.component';
import { FormControlAgeComponent } from './components/form-control-age/form-control-age.component';
import { FormControlEmailComponent } from './components/form-control-email/form-control-email.component';
import { FormControlNameComponentModule } from './components/form-control-name/form-control-name.component-module';
import { FormControlAgeComponentModule } from './components/form-control-age/form-control-age.component-module';
import { FormControlEmailComponentModule } from './components/form-control-email/form-control-email.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'form-control-name', component: FormControlNameComponent },
      { path: 'form-control-age', component: FormControlAgeComponent },
      { path: 'form-control-email', component: FormControlEmailComponent }
    ]),
    FormControlNameComponentModule,
    FormControlAgeComponentModule,
    FormControlEmailComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
