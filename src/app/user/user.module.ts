import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LogonComponent } from './logon/logon.component'
// import { AuthGuard } from 'app/shared/auth-load-guard.service';

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
  ],
  providers: [
    // AuthGuard,
    // AuthService
  ]
})
export class UserModule { }
