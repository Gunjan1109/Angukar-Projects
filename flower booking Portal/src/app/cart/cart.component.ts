import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlowerinfoComponent } from '../flowerinfo/flowerinfo.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  selectedID:number;
  obj = {name:"",price:0,description:"", pic:"",occasion:"",remain_fresh:""}
  constructor(private route:ActivatedRoute, private flowerinfo: FlowerinfoComponent) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.selectedID = parseInt(id);

    for (let i = 0; i < this.flowerinfo.flowers.length; i++) {
      if(this.flowerinfo.flowers[i].pid == id){
       
        this.obj = this.flowerinfo.flowers[i];
      }
  }

}


}