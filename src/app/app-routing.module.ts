import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControlNameComponent } from './components/form-control-name/form-control-name.component';
import { FormControlAgeComponent } from './components/form-control-age/form-control-age.component';
import { FormControlEmailComponent } from './components/form-control-email/form-control-email.component';
import { FormControlCommentComponent } from './components/form-control-comment/form-control-comment.component';
import { FormControlNameComponentModule } from './components/form-control-name/form-control-name.component-module';
import { FormControlAgeComponentModule } from './components/form-control-age/form-control-age.component-module';
import { FormControlEmailComponentModule } from './components/form-control-email/form-control-email.component-module';
import { FormControlCommentComponentModule } from './components/form-control-comment/form-control-comment.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'form-control-name', component: FormControlNameComponent },
      { path: 'form-control-age', component: FormControlAgeComponent },
      { path: 'form-control-email', component: FormControlEmailComponent },
      { path: 'form-control-comment', component: FormControlCommentComponent }
    ]),
    FormControlNameComponentModule,
    FormControlAgeComponentModule,
    FormControlEmailComponentModule,
    FormControlCommentComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
