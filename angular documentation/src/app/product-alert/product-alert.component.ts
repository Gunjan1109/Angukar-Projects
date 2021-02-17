import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss']
})
export class ProductAlertComponent implements OnInit {

  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  sendData(){
    this.notify.emit('Data is this') 
  }
}
