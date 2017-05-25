import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { MdButtonModule, MdIconModule, MdToolbar, MdToolbarModule, MdMenuModule, MdCardModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  // imports: [MaterialModule, FlexLayoutModule],
  exports: [MaterialModule, FlexLayoutModule]
})
export class Material2Module { }
