// collecting such single-use classes and hiding their details inside a CoreModule

import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from 'app/core/posts.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    PostsService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
