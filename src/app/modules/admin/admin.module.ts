import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Adm2Component } from './components/adm2/adm2.component';
import { Adm1Component } from './components/adm1/adm1.component';
import { Adm3Component } from './components/adm3/adm3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Adm1Component,
    Adm2Component,
    Adm3Component

  ],
  exports: [
    
    Adm1Component,
    Adm2Component,
    Adm3Component

  ]
})
export class AdminModule { }