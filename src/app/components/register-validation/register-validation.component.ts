import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

const numberCharacter: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const regex = /[0-9]/;
  if (regex.test(control.value)) {
    return null;
  }
  return { numberCharacter: true };
};

const smallCharacter: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const regex = /[a-z]/;
  if (regex.test(control.value)) {
    return null;
  }
  return { smallCharacter: true };
};
const capitalCharacter: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const regex = /[A-Z]/;
  if (regex.test(control.value)) {
    return null;
  }
  return { capitalCharacter: true };
};

const specialCharacter: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const regex = /[!@#$%^&*()]/;
  if (regex.test(control.value)) {
    return null;
  }
  return { specialCharacter: true };
};

const minLengthCharacter: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const regex = /[a-zA-z0-9!@#$%^&*()]{6,}/;
  if (regex.test(control.value)) {
    return null;
  }
  return { minLengthCharacter: true };
};

const samePasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return password !== confirmPassword
  ? {samePasswordValidator: true}
  : null
};
@Component({
  selector: 'app-register-validation',
  styleUrls: ['./register-validation.component.scss'],
  templateUrl: './register-validation.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterValidationComponent {
  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [
      smallCharacter,
      capitalCharacter,
      numberCharacter,
      specialCharacter,
      minLengthCharacter,
    ]),
    confirmPassword: new FormControl(''),
  }, {validators: samePasswordValidator});

  onRegisterFormSubmitted(registerForm: FormGroup): void {}
}
