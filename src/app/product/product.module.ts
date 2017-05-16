import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HeroesComponent } from 'app/heroes/heroes.component';
import { HeroDetailComponent } from 'app/hero-detail/hero-detail.component';
import { HeroService } from 'app/hero.service';

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
