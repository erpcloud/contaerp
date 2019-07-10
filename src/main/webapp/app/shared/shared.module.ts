import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContaerpSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ContaerpSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ContaerpSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContaerpSharedModule {
  static forRoot() {
    return {
      ngModule: ContaerpSharedModule
    };
  }
}
