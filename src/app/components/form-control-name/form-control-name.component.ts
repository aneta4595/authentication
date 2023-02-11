import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-name',
  styleUrls: ['./form-control-name.component.scss'],
  templateUrl: './form-control-name.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlNameComponent {
  readonly name: FormControl = new FormControl('', [Validators.minLength(3), Validators.required]);


}
