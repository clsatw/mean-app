// SharedModule exists to make commonly used components, directives,
// and pipes available for use in the templates of components in many other modules.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdIconModule, MdToolbarModule, MdMenuModule, MdCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    // StarComponent
  ],
  // declar StarComponent later
  declarations: [  ],
})
export class SharedModule { }
