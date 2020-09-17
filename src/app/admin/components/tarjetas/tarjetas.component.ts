import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() name :any
  @Input() stock :any
  @Input() type :any
  @Input() price :any
  @Input() id
  @Input() imageUrl
  @Output() edit = new EventEmitter()
  @Output() delete = new EventEmitter()

  constructor() { }

  ngOnInit() {
    
  }
  OnEdit(){
    this.edit.emit()
  }
  OnDelet(){
    this.delete.emit()
  }

}