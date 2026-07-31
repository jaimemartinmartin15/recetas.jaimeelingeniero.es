import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService } from '@jaimemartinmartin15/jei-devkit-angular-shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styleUrl: 'app.scss',
})
export class App {
  public constructor(readonly seoService: SeoService) {
    seoService.listenNavigationEvents();
  }
}
