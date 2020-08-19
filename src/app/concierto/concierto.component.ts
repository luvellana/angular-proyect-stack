import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-concierto',
  templateUrl: './concierto.component.html',
  styleUrls: ['./concierto.component.css']
})
export class ConciertoComponent implements OnInit {

  @Input() nombre;
  @Input() stock;
  @Input() habilitado;

  @Output() vendido = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  Vender(){
    this.stock--;
    if(this.stock==0){
      this.habilitado =false;
    }
    this.vendido.emit()
  }

}