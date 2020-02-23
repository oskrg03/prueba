import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthFailPageRoutingModule } from './auth-fail-routing.module';

import { AuthFailPage } from './auth-fail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthFailPageRoutingModule
  ],
  declarations: [AuthFailPage]
})
export class AuthFailPageModule {}
