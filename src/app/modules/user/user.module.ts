import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Us1Component } from './components/us1/us1.component';
import { Us2Component } from './components/us2/us2.component';
import { UserComponent } from './components/user/user.component';
import { UserRoutingModule } from './user-routing/user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    Us1Component,
    Us2Component,
    UserComponent
  ],
  exports: [
    Us1Component,
    Us2Component

  ]
})
export class UserModule { }