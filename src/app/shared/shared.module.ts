// SharedModule exists to make commonly used components, directives,
// and pipes available for use in the templates of components in many other modules.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async } from 'rxjs/scheduler/async';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpModule,
    // StarComponent
  ],
  // declar StarComponent later
  declarations: [  ],
})
export class SharedModule { }
