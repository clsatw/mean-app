// SharedModule exists to make commonly used components, directives,
// and pipes available for use in the templates of components in many other modules.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// formsModule is for 2-way binding
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InitCapsPipe } from "app/shared/init-caps.pipe";
// import { StarComponent } from "app/shared/star.component";
// import { async } from 'rxjs/scheduler/async';

@NgModule({
  // import all modules required by the assets in the SharedModule
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  // export all symbols from the SharedModule that other feature modules need to use
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InitCapsPipe,
    // HttpModule,
    // StarComponent
  ],
  // declar StarComponent later
  // components shared by other feature modules
  declarations: [ 
    InitCapsPipe,
    // StarComponent
   ],
  /* Avoid providing services in shared modules. Services are usually singletons
  ** that are provided once for the entire application or in a particular feature module.
  ** Coz a lazy loaded feature module that imports that shared module will make its own copy 
  ** of the service and likely have undesirable results.
  */
})
export class SharedModule { }
