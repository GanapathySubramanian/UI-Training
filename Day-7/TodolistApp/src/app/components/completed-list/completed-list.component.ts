import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html',
  styleUrls: ['./completed-list.component.css']
})
export class CompletedListComponent implements OnInit {

  @Input('completelist') completedList:String[]=[]
  @Input('todolist') todoList:String[]=[];
  data:String;
  storage:Storage=localStorage;
   constructor(private router:Router) {
    }

    remove(i:any,task:String){
      this.completedList.splice(i,1);
      this.storage.setItem('completedItems',JSON.stringify(this.completedList))
    }
    redo(i:any,task:String){
        this.remove(i,task);
        this.todoList.push(task)
        this.storage.setItem('todoItems',JSON.stringify(this.todoList))    
    }
  ngOnInit(): void {
  }

}
