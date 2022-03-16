import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html',
  styleUrls: ['./completed-list.component.css']
})
export class CompletedListComponent implements OnInit {

  @Input('completelist') completedList:String[]=[]
  @Input('todolist') todoList:String[]=[];

  storage:Storage=localStorage;
   constructor(private router:Router,private toastr:ToastrService) {
    }

    remove(i:any,task:String){
      this.completedList.splice(i,1);
      this.toastr.error( "Task : "+task,"TASK REMOVED FROM COMPLETEDLIST")
      this.storage.setItem('completedItems',JSON.stringify(this.completedList))
    }
    redo(i:any,task:String){
        this.remove(i,task);
        this.toastr.info( "Task : "+task,"TASK AGAIN ADDED TO TODLIST")
        this.todoList.push(task)
        this.storage.setItem('todoItems',JSON.stringify(this.todoList))    
    }
  ngOnInit(): void {
  }

}
