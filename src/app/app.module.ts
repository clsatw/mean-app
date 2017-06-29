// Modules don't inherit access to the components, directives, or pipes that are declared in other modules.
// What AppModule imports is irrelevant to ContactModule and vice versa

import { NgModule } from '@angular/core';
// BrowserAnimationsModule excludes commonmodule which is required for data binding
import { CommonModule } from '@angular/common';

// use browserAnimationsModule inlcudes browserModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

// app root
import { AppComponent } from './app.component';

// import { PostsService } from './posts/posts.service';
// lazy loaded module's components

// routing module
import { AppRoutingModule } from './router/app-routing.module';

// feature module
// import { AdminModule } from 'app/admin/admin.module';
import { CoreModule } from 'app/core/core.module';
import { AuthGuardService } from 'app/shared/auth-load-guard.service';
import { AuthService } from 'app/user/logon/auth.service';
import { Material2Module } from 'app/material2/material2.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // any angular system pieces & 3rd-party modules that we want to use
    BrowserAnimationsModule,
    Material2Module,
    CommonModule,
    // ReactiveFormsModule, // <-- #2 add to Angular module imports
    HttpModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuardService,
    AuthService
  ],
  // providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
