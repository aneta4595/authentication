import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControlNameComponent } from './components/form-control-name/form-control-name.component';
import { FormControlNameComponentModule } from './components/form-control-name/form-control-name.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'form-control-name', component: FormControlNameComponent },
    ]),
    FormControlNameComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
