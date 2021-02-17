import { Injectable } from '@angular/core';
import { Tasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TodotasksService {

constructor() { }
tasks = []
today = new Date()
saveTask(task,date,priority){
  this.tasks.push(new Tasks(task,date,'Pending',priority))
}

deleteTask(id){
   var result = this.tasks.splice(id,1);

   this.tasks.filter(x => !result.includes(x))
}
getTasks(){
  return this.tasks
}

}
