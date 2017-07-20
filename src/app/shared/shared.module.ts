// SharedModule exists to make commonly used components, directives,
// and pipes available for use in the templates of components in many other modules.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// formsModule is for 2-way binding
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { async } from 'rxjs/scheduler/async';

@NgModule({
  imports: [CommonModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpModule,
    // StarComponent
  ],
  // declar StarComponent later
  // components shared by modules
  declarations: [  ],
})
export class SharedModule { }
