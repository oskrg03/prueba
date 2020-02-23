import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthFailPage } from './auth-fail.page';

const routes: Routes = [
  {
    path: '',
    component: AuthFailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthFailPageRoutingModule {}
