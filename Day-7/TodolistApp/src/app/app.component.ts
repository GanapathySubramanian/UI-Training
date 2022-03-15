import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodolistApp';

   todoList:String[]=[];
   newTask:String='';
   storage:Storage=localStorage;
   constructor(){
     let data=JSON.parse(this.storage.getItem('todoItems'));
     if(data!=null){
       this.todoList=data;
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

}
