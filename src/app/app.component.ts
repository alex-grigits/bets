import { Component } from '@angular/core';

import { HttpService } from './shared/http.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})

export class AppComponent {
  title = 'Event Scanner App';
}