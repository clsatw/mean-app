import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { ReactiveFormsModule } from '@angular/forms';

// app root
import { AppComponent } from './app.component';

// import { PostsService } from './posts/posts.service';
// lazy loaded module's components

// routing module
import { AppRoutingModule } from './router/app-routing.module';

// feature module
// import { AdminModule } from 'app/admin/admin.module';
import { CoreModule } from 'app/core/core.module';
import { AuthGuard } from 'app/shared/auth-load-guard.service';
import { AuthService } from 'app/user/logon/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // any angular system pieces & 3rd-party modules that we want to use    
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule, // <-- #2 add to Angular module imports
    HttpModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  // providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
