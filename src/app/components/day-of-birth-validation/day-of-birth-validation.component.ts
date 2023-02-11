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

const month31Validator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const day = control.get('day')?.value;
  const month = control.get('month')?.value;
  const monthHave31Days: number[] = [1, 3, 5, 7, 8, 10, 12];
  const monthHaveLessThan31Days: number[] = [2, 4, 6, 9, 11];

  if (monthHave31Days.includes(month) && day <= 31 ) {
    return null;
  } else if (monthHaveLessThan31Days.includes(month) && day < 31) {
    return null;
  }
  return { month31Validator: true };
};

const februaryMonthValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const day = control.get('day')?.value;
  const year = control.get('year')?.value;
  const month = control.get('month')?.value;

  if (month == 2 && day < 29) {
    return null;
  } else if (
    ((month == 2 && day < 30) && (year % 4 == 0 ) && (year % 100 != 0)) ||
    ((year % 400 == 0))
  ) {
    return null;
  } 
  return { februaryMonthValidator: true };
};


@Component({
  selector: 'app-day-of-birth-validation',
  styleUrls: ['./day-of-birth-validation.component.scss'],
  templateUrl: './day-of-birth-validation.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayOfBirthValidationComponent {
  readonly currentYear: number = new Date().getFullYear();

  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),

    birth: new FormGroup(
      {
        day: new FormControl('', [Validators.min(1), Validators.max(31)]),
        month: new FormControl('', [Validators.min(1), Validators.max(12)]),
        year: new FormControl('', [
          Validators.min(100),
          Validators.max(this.currentYear),
        ]),
      },
      { validators: [month31Validator, februaryMonthValidator] }
    ),
    password: new FormControl(),
    repeatPassword: new FormControl(),
  });

  onRegisterFormSubmitted(registerForm: FormGroup): void {}
}
