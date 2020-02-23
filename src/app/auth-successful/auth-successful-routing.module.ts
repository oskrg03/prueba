import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthSuccessfulPage } from './auth-successful.page';

const routes: Routes = [
  {
    path: '',
    component: AuthSuccessfulPage
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthSuccessfulPageRoutingModule {}
