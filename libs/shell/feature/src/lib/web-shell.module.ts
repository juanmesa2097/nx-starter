import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WEB_SHELL_ROUTES } from './web-shell.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(WEB_SHELL_ROUTES)],
})
export class WebShellModule {}
