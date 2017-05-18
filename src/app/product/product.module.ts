// Modules don't inherit access to the components, directives, or pipes that are declared in other modules.
// What AppModule imports is irrelevant to ContactModule and vice versa

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HeroesComponent },
      { path: '/detail/:id', component: HeroDetailComponent }
    ]
  }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    // a component has to be declared in a module and only once.
    HeroesComponent,
    HeroDetailComponent,
  ],
  // application wide
  providers: [HeroService]
})
export class ProductModule { }
