import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AuthSuccessfulPageRoutingModule } from './auth-successful-routing.module';

import { AuthSuccessfulPage } from './auth-successful.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AuthSuccessfulPageRoutingModule
  ],
  declarations: [AuthSuccessfulPage]
})
export class AuthSuccessfulPageModule {}
