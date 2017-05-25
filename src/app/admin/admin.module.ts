import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ManageCrisesComponent } from './manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes.component';
import { AdminRoutingModule } from './admin-routing.module';
// tslint:disable-next-line:quotemark
import { Material2Module } from "app/material2/material2.module";

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
     Material2Module,
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageCrisesComponent,
    ManageHeroesComponent
  ]
})
export class AdminModule { }

