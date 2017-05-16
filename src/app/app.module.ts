import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
// lazy loaded module's components
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// import { HeroesComponent } from './heroes/heroes.component';
// import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './router/app-routing.module';
import { ProductModule } from 'app/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    DashboardComponent,
    // HeroesComponent,
    // HeroDetailComponent,
  ],
  imports: [
    // any angular system pieces & 3rd-party modules that we want to use
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule, // <-- #2 add to Angular module imports
    HttpModule,
    AppRoutingModule,
    // ProductModule,
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
