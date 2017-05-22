import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { ReactiveFormsModule } from '@angular/forms';

// app root
import { AppComponent } from './app.component';

import { PostsComponent } from './posts/posts.component';
// import { PostsService } from './posts/posts.service';
// lazy loaded module's components

import { DashboardComponent } from './dashboard/dashboard.component';

// routing module
import { AppRoutingModule } from './router/app-routing.module';

// feature module
// import { ProductModule } from 'app/product/product.module';
import { CoreModule } from 'app/core/core.module';

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
    CoreModule,
    AppRoutingModule,
    // ProductModule,
  ],
  // providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
