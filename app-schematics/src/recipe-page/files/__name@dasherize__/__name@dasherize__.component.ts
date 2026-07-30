import { Component } from '@angular/core';

@Component({
  selector: 'app-<%= dasherize(name) %>',
  template: `<p>TODO</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class <%= classify(name) %>Component {}
