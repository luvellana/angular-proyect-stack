import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curso-angular';

  ngOnInit(){
    const array = from( [0, 1, 2] );
    array.subscribe(a => console.log('item: ', a))

    const aux = fromEvent(document, 'mousemove');

    aux.subscribe((a:a) => console.log('event: ', a.clientX + ', ' + a.clientY))
  }
  
}
