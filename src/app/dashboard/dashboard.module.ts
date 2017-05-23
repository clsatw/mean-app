import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
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
        RouterModule.forChild(routes)
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }
