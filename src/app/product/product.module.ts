// Modules don't inherit access to the components, directives, or pipes that are declared in other modules.
// What AppModule imports is irrelevant to ContactModule and vice versa

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
// import { ProdSharedModule} from './shared/prod-shared.module';
import { Material2Module } from 'app/material2/material2.module';

import { HeroesComponent } from './heroes.component';
import { ProdService } from './prod.service';
import { ProdButtonComponent } from "app/product/shared/prod-button/prod-button.comonent";
import { SearchService } from './../search.service';
import { ProdNewComponent } from "app/product/prod-new/prod-new.component";
import { ProdListComponent } from "app/product/prod-list/prod-list.component";
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { ProdHighlightDirective } from "app/product/shared/prod-button/prod-hightlight.directive";
// import { StarComponent } from "app/shared/star.component";

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
  { path: ':id', component: ProdDetailComponent }
]

@NgModule({
  imports: [
    SharedModule,    
    Material2Module,  
    RouterModule.forChild(routes)
  ],
  declarations: [
    // a component has to be declared in a module and only once.
    ProdHighlightDirective,
    ProdButtonComponent,
    HeroesComponent,
    ProdDetailComponent,
    ProdNewComponent,
    ProdListComponent
    // StarComponent
  ],

  /* why it is no longer export HeroesComponent?
  ** Now that you navigate to HeroesComponent with the router,
  ** there's no reason to make it public. Also, HeroesComponent doesn't need
  ** a selector. No template will ever again reference this ContactComponent.
  */
  // application wide
  providers: [ProdService, SearchService]
})
export class ProductModule { }
