import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'curso-angular';

  personas=[
    {
      name: 'p1',
      lastname: 'nick1',
      habilitado: true,
      fechanac: 'Agos-1990-10'
    },
    {
      name: 'p2',
      lastname: 'nick2',
      habilitado: false,
      fechanac: 'Agos-1990-28'
    },
    {
      name: 'p3',
      lastname: 'nick3',
      habilitado: true,
      fechanac: 'Agos-1990-22'
    }

  ]

  habilitados=0

  votos=0
  ngOnInit(){
    for(let persona of this.personas){
      if(persona.habilitado){
        this.habilitados++;
      }
    }
  }

  nuevoVoto(){
    this.votos++
  }


}
