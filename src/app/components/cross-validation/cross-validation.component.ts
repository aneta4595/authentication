import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

const customCrossFieldValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const repeatPassword = control.get('repeatPassword')?.value;

  return password !== repeatPassword
  ? {customCrossFieldValidator: true}
  : null
}

@Component({
  selector: 'app-cross-validation',
  styleUrls: ['./cross-validation.component.scss'],
  templateUrl: './cross-validation.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrossValidationComponent {
  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required]),
  },{validators: customCrossFieldValidator});

  onRegisterFormSubmitted(registerForm: FormGroup): void {
  }


}
