import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public router: Router) {}

  title = 'finansys';

  get login() {
    if (this.router.url === '/login' || this.router.url === '/login/forgot') {
      return false;
    }
    return true;
  }
}
