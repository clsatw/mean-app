import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { PostsComponent } from './posts.component';

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
    { path: '', component: PostsComponent },
]

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        PostsComponent,
    ]
})
export class PostsModule { }
