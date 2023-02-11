import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationRegisterFormComponent } from './authentication-register-form.component';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule],
  declarations: [AuthenticationRegisterFormComponent],
  providers: [],
  exports: [AuthenticationRegisterFormComponent]
})
export class AuthenticationRegisterFormComponentModule {
}
