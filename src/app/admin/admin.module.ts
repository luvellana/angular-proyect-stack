import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { BarraComponent } from './components/barra/barra.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductService } from '../shared/services/product.service';


@NgModule({
  imports: [
    CommonModule,
    FormularioComponent,
    BarraComponent,
    TarjetasComponent,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent
  ],
  providers: [ProductService],
  bootstrap: [AdminComponent]
})
export class AdminModule { }