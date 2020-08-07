import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  @Input() name : string;
  @Input() age : number;
  @Input() description : string;

  @Output() clickSave = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  OnClickSave(){
    this.clickSave.emit({
      name: this.name,
      age: this.age,
      description: this.description
    });
  }

}