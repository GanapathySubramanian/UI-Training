import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService{
  todoList:any[]=[];


  // totalTask:Subject<number> = new Subject<number>();
  // pendingTask:Subject<number> = new Subject<number>();
  // completedTask:Subject<number> = new Subject<number>();
  
  //it will keep track on previous+new events
  // totalTask:Subject<number> = new ReplaySubject<number>();
  // pendingTask:Subject<number> = new ReplaySubject<number>();
  // completedTask:Subject<number> = new ReplaySubject<number>();
  

  // it will keep track on the last updated + new event
  totalTask:Subject<number> = new BehaviorSubject<number>(0);
  pendingTask:Subject<number> = new BehaviorSubject<number>(0);
  completedTask:Subject<number> = new BehaviorSubject<number>(0);
  
  storage:Storage=localStorage;
  
  constructor() {
    let data=JSON.parse(this.storage.getItem('Items'));
    if(data!=null){
      this.todoList=data;
    }
    this.computeTaskCount();
  }


  computeTaskCount() {
      let total:number=0;
      let pending:number=0;
      let completed:number=0;

      total=this.todoList.length;
      for(let i=0;i<total;i++){
        if(this.todoList[i].status=='Pending'){
          pending+=1;
        }
        if(this.todoList[i].status=='Completed'){
          completed+=1;
        }
      }

      console.log(total+" "+pending+ " "+ completed);
      this.totalTask.next(total);
      this.pendingTask.next(pending);
      this.completedTask.next(completed);
  }

  addTodo(task:String):Observable<any>[]{
    let date=new Date();
    this.todoList.push({taskName:task,status:'Pending',createdAt:date});
    console.log(this.todoList);
    this.computeTaskCount()
    this.storage.setItem('Items',JSON.stringify(this.todoList));
    return this.todoList;
  }
  redotodo(index:number):Observable<any>[]{
    this.todoList[index].status='Pending';
    this.computeTaskCount()
    this.storage.setItem('Items',JSON.stringify(this.todoList));
    return this.todoList;
  }

  remove(index:number):Observable<any>[]{
    this.todoList.splice(index,1);
    this.computeTaskCount()
    this.storage.setItem('Items',JSON.stringify(this.todoList));
    return this.todoList;
  }

  addtoCompleted(index:number):Observable<any>[]{
    this.todoList[index].status='Completed';
    this.computeTaskCount()
    this.storage.setItem('Items',JSON.stringify(this.todoList));
    return this.todoList;
  }
 
}
