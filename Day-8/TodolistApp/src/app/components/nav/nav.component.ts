import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  totalTaskCount:number=0;
  pendingTaskCount:number=0;
  completedTaskCount:number=0;
  constructor(private todoservice:TodoServiceService) { 
    this.getTaskCounts();   
  }
  ngOnInit(): void {
    this.getTaskCounts();    
    console.log("hi");
    
  }
  getTaskCounts() {
     //subscribe to get the total count
     this.todoservice.totalTask.subscribe(
       data=>this.totalTaskCount=data
     )
  
     //subscribe to get the pending count
     this.todoservice.pendingTask.subscribe(
       data=>this.pendingTaskCount=data
     )
     //subscribe to get the completed count
     this.todoservice.completedTask.subscribe(
       data=>this.completedTaskCount=data
     )
  }

}
