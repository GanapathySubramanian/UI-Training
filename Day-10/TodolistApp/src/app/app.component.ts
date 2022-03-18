import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodolistApp';


  totalTaskCount:number=0;
  pendingTaskCount:number=0;
  completedTaskCount:number=0;

  list:any[]=[];
  
  constructor(private todo:TodoService) {
    this.getlist();
   }


  getlist() {
    this.todo.getList()
    this.todo.list.subscribe(data=>{
      this.list=data;
      console.log(this.list);
      this.calculateCount(this.list);
    })
  }
  calculateCount(list: any[]) {
    this.totalTaskCount=list.length;
    this.pendingTaskCount=0;
    this.completedTaskCount=0;
    for(let i=0;i<list.length;i++){
      if(list[i].status=='completed'){
        this.completedTaskCount=this.completedTaskCount+1;
      }
      if(list[i].status=='pending'){
        this.pendingTaskCount=this.pendingTaskCount+1;
      }
    }
  }

}
