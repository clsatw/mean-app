import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// import { AuthGuard } from 'app/shared/auth-load-guard.service';
// import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module

// import { DashboardComponent } from '../dashboard/dashboard.component';
// import { PostsComponent } from '../posts/posts.component';
// import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
// import { HeroesComponent } from '../heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts/dashboard', pathMatch: 'full' },
  // { path: 'posts', loadChildren: '../posts/posts.module#PostModule' },
  { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
  { path: 'posts', loadChildren: '../posts/posts.module#PostsModule' },
  { path: 'heroes', loadChildren: '../product/product.module#ProductModule'},
  { path: 'logon', loadChildren: '../user/user.module#UserModule'},
  { path: 'admin', loadChildren: '../admin/admin.module#AdminModule'},
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
