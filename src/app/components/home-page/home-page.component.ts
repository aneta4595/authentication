import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
}
