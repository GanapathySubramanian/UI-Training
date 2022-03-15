import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.css']
})
export class PendingListComponent implements OnInit {


  @Input('list') todoList:String[]=[]
  completedList:String[]=[]
  data:String;
  storage:Storage=localStorage;
   constructor(private router:Router) {
        let data=JSON.parse(this.storage.getItem('completedItems'));
        if(data!=null){
          this.completedList=data;
        }
    }

    addToList(task:string) {
      console.log(task);
      if(task!=''){
        this.todoList.push(task);
      }
        console.log(this.todoList);
        this.storage.setItem('todoItems',JSON.stringify(this.todoList))
    }

    taskCompleted(index:any,val:String){
      document.getElementById(index).classList.toggle('line');
      if(val!=''){
        this.completedList.push(val);
      }
      this.storage.setItem('completedItems',JSON.stringify(this.completedList))
      this.todoList.splice(index,1);
      this.storage.setItem('todoItems',JSON.stringify(this.todoList))
    }
    ngOnInit(): void {
    }

}
