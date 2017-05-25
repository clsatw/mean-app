import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
// tslint:disable-next-line:quotemark
import { Material2Module } from "app/material2/material2.module";
/*
const routes: Routes = [
  {
    path: 'logon',
    component: LogonComponent,
    children: [
      { path: '', component: LogonComponent },
    ]
  }
];
*/

const routes: Routes = [
    { path: '', component: DashboardComponent }
];

@NgModule({
    imports: [
        SharedModule,
        Material2Module,
        RouterModule.forChild(routes)
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }
