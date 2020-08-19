import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input() name;
  @Input() lastname;
  @Input() habilitado;
  @Input() fechanac;
  @Output() voto = new EventEmitter();
  emitido = false;

  constructor() {}

  ngOnInit() {
  }
  EmitirVoto(){

    this.emitido = true;
    this.voto.emit()
  }

}