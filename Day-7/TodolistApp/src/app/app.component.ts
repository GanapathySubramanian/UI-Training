import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodolistApp';
  completedList:String[]=[]
   todoList:String[]=[];
   newTask:String='';
   storage:Storage=localStorage;
   constructor(private toastr:ToastrService){
     let data=JSON.parse(this.storage.getItem('todoItems'));
     if(data!=null){
       this.todoList=data;
     }

     let data1=JSON.parse(this.storage.getItem('completedItems'));
     if(data1!=null){
       this.completedList=data1;
     }
     
   }
  addToList(task:string) {
    console.log(task);
    if(task!=''){
      this.todoList.push(task);
      this.toastr.info("Task : "+task,"TASK ADDED TO TODOLIST")
  }
      console.log(this.todoList);
      this.storage.setItem('todoItems',JSON.stringify(this.todoList))
  }


}
