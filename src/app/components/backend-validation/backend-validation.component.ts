import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-backend-validation',
  styleUrls: ['./backend-validation.component.scss'],
  templateUrl: './backend-validation.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackendValidationComponent {
  readonly backendForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private _loginService: LoginService, private _router: Router, private cd: ChangeDetectorRef) {
  }

  onBackendFormSubmitted(backendForm: FormGroup): void {
    this._loginService.loginCredentials({
      data: {
        email: backendForm.value.email,
        password: backendForm.value.password
      }
    }).subscribe({
      next: () => this._router.navigate(['/success']),
      error: (err) => {
        return backendForm.setErrors({
          beValidation: err.error.message
        }),
        this.cd.markForCheck()
      }
    });
  }
}
