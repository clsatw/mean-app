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
  navLinks = ['logon', 'posts', 'heroes', 'dashboard', 'admin']; 
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor() { }
}
