import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input('todo') todoList:any[]=[];
  storage:Storage=localStorage
  constructor(private toastr:ToastrService,private todo:TodoServiceService) {}

  ngOnInit(): void {
  }

  addToCompletedList(index:number){
    let data=this.todo.addtoCompleted(index);
    this.todoList=data;
    this.toastr.success("Task : "+this.todoList[index].taskName,"TASK COMPLETED");
  }

  redo(index:number){
    let data=this.todo.redotodo(index);
    this.todoList=data;
    this.toastr.info("Task : "+this.todoList[index].taskName,"TASK PENDING");

  }
  remove(index:number){
    this.toastr.error("Task : "+this.todoList[index].taskName,"TASK REMOVED");
    let data=this.todo.remove(index);
    this.todoList=data;
  }
}
