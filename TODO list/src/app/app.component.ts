import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Tasks } from './tasks'
import { TodotasksService } from './todotasks.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnChanges{

  constructor(private todoService : TodotasksService){}
   gif = [];
  ngOnInit(){
    var url = `http://api.giphy.com/v1/gifs/search?q=cat&api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&limit=5`

    var data = fetch(url)

    data.then((gifs) => {
      gifs.json().then((data) => {
        for (let i = 0; i < 5; i++) {
         this.gif.push(data.data[i].images.original.url)
          
        }
      })
        console.log(this.gif);
        
    }).catch((err) => {
      console.log('error');
      
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const change in changes) {
     console.log("Change is " + change);
     
    }
  }
  tasks = []
  fillColor = 'rgb(255,0,3)';
  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
  title = "TODO List"
  name = "Gunjan"
  today = new Date()
  saveTask(task,date,priority){
    //this.tasks.push(new Tasks(task,date,'PENDING',priority))
    this.todoService.saveTask(task,date,priority)
    this.getTasks()
  }

  getTasks(){
    this.tasks = this.todoService.getTasks()
  }
  taskone;
  taskbool = false
  showDetails(task){
    this.taskbool = !this.taskbool
    
   this.taskone = task
   
  }
   
  deleteTask(id){
    
  this.todoService.deleteTask(id)
   
  }
}
