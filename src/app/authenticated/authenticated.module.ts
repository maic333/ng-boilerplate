import { NgModule } from '@angular/core';
import pages from './pages';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { CommonSharedModule } from '../shared/common-shared/common-shared.module';
import { FormsCommonModule } from '../shared/forms-common/forms-common.module';

@NgModule({
  imports: [
    AuthenticatedRoutingModule,
    CommonSharedModule,
    FormsCommonModule
  ],
  declarations: [
    ...pages
  ],
  entryComponents: []
})
export class AuthenticatedModule {
}
