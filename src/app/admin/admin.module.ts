
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { BarraComponent } from './components/barra/barra.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductService } from '../shared/services/product.service';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [
    AdminComponent,
    FormularioComponent,
    BarraComponent,
    TarjetasComponent
  ],
  providers: [ProductService],
  bootstrap: [AdminComponent]
})
export class AdminModule { }