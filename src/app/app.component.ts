import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curso-angular';

  sw = true;

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  persons = [
    {
      name: 'p1',
      lastName: 'x',
      age: 22,
      enable: true
    },
    {
      name: 'p2',
      lastName: 'y',
      age: 22,
      enable: false
    },
    
  ]


  aux = 3;


  auxColor = 'red';

  auxClass = true;
  ngOnInit(){
    /*const array = from( [0, 1, 2] );
    array.subscribe(a => console.log('item: ', a))

    const aux = fromEvent(document, 'mousemove');

    aux.subscribe((a:a) => console.log('event: ', a.clientX + ', ' + a.clientY))*/
  console.log('PURA: ', this.pura(6, 2));
    console.log('IMPURA: ', this.impura(6, 2));
  }

  pura(a:number, b:number){
    return a + b;
  }

  impura(a:number, b:number){
    return a + b + Math.random();
  }
  
}
