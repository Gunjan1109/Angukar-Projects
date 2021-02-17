import { Component, Input } from '@angular/core';
import { products } from './products';
//import { NGXLogger } from 'ngx-logger';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  

export class AppComponent {
  //@Input() message;
  title = 'firstproject';
  // n : string = ""
  // obj = []
  // // obj = [{
  // //   name : "Gunjan",
  // //   loc : "Faridabad",
  // //   pin : "121004"
  // // },
  // // {
  // //   name : "Ram",
  // //   loc : "Delhi",
  // //   pin : "110042"
  // // }
  // // ]

  // imgpath = "../assets/images/download.jpg"
  // onsave(){
  //   console.log("Product is saved");
  //   alert("Product is saved")
  // }
  // paramevent($event){
  //   console.log("Event is ",$event);

  // }
  // divclick(){
  //   console.log("div clicked");

  // }

  // divStyle(){
  //   let styles = {
  //     "background-color" : "red",
  //     "border" : "2px solid"
  //   }
  //   return styles
  // }
z
  // addInfo(roll,name,batch,cgpa){
  //     this.obj.push(new Student(roll.value,name.value,batch.value,parseInt(cgpa.value)))
  //     console.log(this.obj[0].name);

  // }

  //   product = [{
  //     name : "Phone XL",
  //     description : "Comes with full display",
  //     price : 60000
  //  },
  // {
  //     name : "Phone Mini",
  //     price : 40000
  // },
  // {
  //     name : "Phone Maestro",
  //     description : "Comes with battery saver",
  //     price : 30000
  // }
  // ]


  value = '';
  color : string
  onKey(event: KeyboardEvent) {
  
    this.value += (event.target as HTMLInputElement).value + " || ";
  }
  products = products
  shareProduct() {
    
    alert("Product shared")
  }
  message;
  onnotify($message) {
  
    this.message = $message
    alert("This product will be notified when available " + $message)
  }
}
