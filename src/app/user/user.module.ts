import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LogonComponent } from './logon/logon.component'
// tslint:disable-next-line:quotemark
import { Material2Module } from "app/material2/material2.module";
// import { AuthGuard } from 'app/shared/auth-load-guard.service';

const routes: Routes = [
  { path: '', component: LogonComponent }
];

@NgModule({
  imports: [
    SharedModule,
    Material2Module,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LogonComponent,
  ],
  providers: [
    // AuthGuard,
    // AuthService
  ]
})
export class UserModule { }
