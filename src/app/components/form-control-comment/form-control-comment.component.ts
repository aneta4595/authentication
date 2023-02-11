import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-comment',
  styleUrls: ['./form-control-comment.component.scss'],
  templateUrl: './form-control-comment.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlCommentComponent {
  readonly comment: FormControl = new FormControl('', [Validators.pattern('([a-zA-Z]+\\s){4,}')]) ;


}
