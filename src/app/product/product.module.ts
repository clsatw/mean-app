// Modules don't inherit access to the components, directives, or pipes that are declared in other modules.
// What AppModule imports is irrelevant to ContactModule and vice versa

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { Material2Module } from 'app/material2/material2.module';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { SearchService } from './../search.service';
import { ProdNewComponent } from "app/product/prod-new/prod-new.component";
import { ProdListComponent } from "app/product/prod-list/prod-list.component";

/*
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HeroesComponent },
      { path: '/:id', component: HeroDetailComponent }
    ]
  }
]
*/

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: HeroesComponent },
  { path: ':id', component: HeroDetailComponent }
]

@NgModule({
  imports: [
    SharedModule,
    Material2Module,
    RouterModule.forChild(routes)
  ],
  declarations: [
    // a component has to be declared in a module and only once.
    HeroesComponent,
    HeroDetailComponent,
    ProdNewComponent,
    ProdListComponent
  ],

  /* why it is no longer export HeroesComponent?
  ** Now that you navigate to HeroesComponent with the router,
  ** there's no reason to make it public. Also, HeroesComponent doesn't need
  ** a selector. No template will ever again reference this ContactComponent.
  */
  // application wide
  providers: [HeroService, SearchService]
})
export class ProductModule { }
