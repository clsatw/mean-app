import { NgModule } from '@angular/core';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
// import { MdOption, MdButtonModule, MdToolbarModule, MdIconModule, MdMenuModule, MdCardModule } from '@angular/material';

// Gesture support
import 'hammerjs';
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  //imports: [MdButtonModule, MdToolbarModule, MdMenuModule, MdCardModule, FlexLayoutModule],
  // exports: [NoopAnimationsModule, MdIconModule, MdButtonModule, MdToolbarModule, MdMenuModule, MdCardModule, FlexLayoutModule]
  exports: [ MaterialModule, FlexLayoutModule ]
})
export class Material2Module { }
