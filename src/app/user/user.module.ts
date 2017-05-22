import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LogonComponent } from './logon/logon.component'

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
  { path: '', component: LogonComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LogonComponent,
  ]
})
export class UserModule { }
