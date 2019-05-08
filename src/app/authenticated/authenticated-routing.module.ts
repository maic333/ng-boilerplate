import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromPages from './pages';

const routes: Routes = [
  {
    path: 'questionnaire',
    component: fromPages.QuestionnaireComponent
  },
  {
    path: '',
    redirectTo: 'questionnaire'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
