import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-starter-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
