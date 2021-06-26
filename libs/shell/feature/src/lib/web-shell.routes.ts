import { Routes } from '@angular/router';
import { LayoutComponent } from '@nx-starter/shell/ui';

export const WEB_SHELL_ROUTES: Routes = [
  { path: '', component: LayoutComponent, children: [] },
];
