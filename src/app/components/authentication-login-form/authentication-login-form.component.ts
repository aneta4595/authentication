import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-authentication-login-form',
  styleUrls: ['./authentication-login-form.component.scss'],
  templateUrl: './authentication-login-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationLoginFormComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private _loginService: LoginService, private _router: Router) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {
    this._loginService.loginCredentials({ 
      data: {
      email: loginForm.value.email,
      password: loginForm.value.password
    }
   }).subscribe({
    next: () => this._router.navigate(['/success']),
    error: () => this._router.navigate(['/error'])
   });
  }
}
