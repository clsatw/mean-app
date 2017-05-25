import { Component } from '@angular/core';

export interface Hero {
  id: number;
  name: string;
}

// handling nothing but routing
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'Tour of Heroes';
  navLinks: Array<any>;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor() {
    this.navLinks = ['logon', 'posts', 'heroes', 'dashboard', 'admin'];
  }
}
