import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-age',
  styleUrls: ['./form-control-age.component.scss'],
  templateUrl: './form-control-age.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlAgeComponent {
  readonly age: FormControl = new FormControl('', [Validators.min(18)]);


}
