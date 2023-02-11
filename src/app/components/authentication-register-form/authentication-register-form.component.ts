import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-authentication-register-form',
  styleUrls: ['./authentication-register-form.component.scss'],
  templateUrl: './authentication-register-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationRegisterFormComponent {
  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private _registerService: RegisterService, private _router: Router) {
  }

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    this._registerService.register({ 
      data: {
        email: registerForm.value.email,
        password: registerForm.value.password
      } 
    }).subscribe({
      next: () => this._router.navigate([''])
    });
  }
}
