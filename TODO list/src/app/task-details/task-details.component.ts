import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Tasks } from '../tasks';
import { AppComponent } from '../app.component'
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit,OnChanges {

  @Input() task;

  constructor() {
     
      
   }
  ngOnChanges(changes: SimpleChanges): void {
    for (const change in changes) {
      console.log("Change is" + change);
      
    }
  }
  
  ngOnInit() {
    console.log(this.task.taskName);
    
  }


}
