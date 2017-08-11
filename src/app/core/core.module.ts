/* collecting such single-use classes and hiding their details inside a CoreModule
** CoreModule exists to make commonly used singleton services available for use in many other modules.
** gather application-wide, single use components in the CoreModule. Import it once (in the AppModule) when the app starts and never import it anywhere else.
** (e.g. NavComponent and SpinnerComponent).
*/

import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../posts/posts.service';
import { LoggerService } from './logger.service';
import { NavComponent } from "app/core/nav/nav.component";
import { SpinnerComponent } from "app/core/spinner/spinner.component";
import { SpinnerService } from "app/core/spinner/spinner.service";

@NgModule({
  imports: [
    CommonModule, // we use ngFor, so need it  
  ],
  /* export all symbols from the CoreModule that the AppModule will import
  ** and make available for other feature modules to use
  */
  exports: [NavComponent, SpinnerComponent],
  declarations: [NavComponent, SpinnerComponent],
  providers: [
    // application-wide - avaialbe to any component that needs it.
    PostsService,
    LoggerService,
    SpinnerService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
