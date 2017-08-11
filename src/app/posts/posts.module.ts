import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { PostsComponent } from './posts.component';

// tslint:disable-next-line:quotemark
import { Material2Module } from "app/material2/material2.module";
import { PostsService } from "app/posts/posts.service";

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
        Material2Module,
        RouterModule.forChild(routes)
    ],
    declarations: [
        PostsComponent,
    ] 
})
export class PostsModule { }
