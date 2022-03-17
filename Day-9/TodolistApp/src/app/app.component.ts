import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TodoServiceService } from './services/todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodolistApp';
  todoList:any[]=[];
  task:String='';
  // status:String="Pending";
  storage:Storage=localStorage;
  constructor(private toastr:ToastrService,private todo:TodoServiceService){
      let data=JSON.parse(this.storage.getItem('Items'));
      if(data!=null){
        this.todoList=data;
      }
  }
  addToList(){
    if(this.task!=''){
        let data=this.todo.addTodo(this.task);
        this.todoList=data;
        this.toastr.info("Task : "+this.task,"TASK PENDING");
        this.task='';
    }
  }

}

