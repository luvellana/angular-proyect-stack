import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'curso-angular';
  stockTot = 0;
  conciertos=[
{nombre: "bad bunny", 
stock:1 , 
habilitado: true, 
tipo: "internacional"
},
{nombre: "karkas", 
stock: 2 , 
habilitado: true, 
tipo: "nacional"
},
{nombre: "ozuna", 
stock: 0 , 
habilitado: false, 
tipo: "internacional"
},
{nombre: "PK2", 
stock: 45 , 
habilitado: true, 
tipo: "nacional"},
{nombre: "Octavia", 
stock: 20 , 
habilitado: true, 
tipo: "nacional"},
{nombre: "julieta venegas", 
stock: 1 , 
habilitado: true, 
tipo: "internacional"},
{nombre: "rumba 7", 
stock: 4 , 
habilitado: true, 
tipo: "nacional"},
{nombre: "metalica", stock: 0 , habilitado: false, tipo: 
"internacional"},
{nombre: "alcoholica", stock: 33 , habilitado: true, tipo: "nacional"},
{nombre: "juanes", stock: 0 , habilitado: false, tipo: "internacional"}
]

ngOnInit(){
  for(let concert of this.conciertos){
    this.stockTot += concert.stock
  }
}

vender(){
  this.stockTot--
}

}
