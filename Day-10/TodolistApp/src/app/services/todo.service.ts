import { keyframes } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import {  BehaviorSubject, Observable ,of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
 
  category:Observable<string[]> = of(['Movies','Sports','Travels','Studies','Others']);
  todo:Todo={} as Todo;
  baseUrl='https://todolist-38891-default-rtdb.firebaseio.com/todo';
  listItems:Todo[]=[];
  // private sourceSubject = new Subject<Todo[]>();
  // sourceMessage = this.sourceSubject.asObservable();
  list:BehaviorSubject<Todo[]>=new BehaviorSubject<Todo[]>(this.listItems);

  constructor(private http:HttpClient) {
  }

  
  getCategoryList():Observable<String[]>{
    return this.category;
  }

  addtodolist(todo:any):Observable<any>{
    this.todo=todo;
    return this.http.post(`${this.baseUrl}.json`,this.todo);
     
  }

  topending(key:any){
    let temp={status:'pending'}
    this.http.patch(`${this.baseUrl}/${key}.json`,temp).subscribe(res=>{
      console.log(res);
      this.getList();
    })
  }
  
  tocompleted(key:any){
    let temp={status:'completed'};
    this.http.patch(`${this.baseUrl}/${key}.json`,temp).subscribe(res=>{
      console.log(res);
      
      this.getList();
    })
  }
  remove(key:any){
    this.http.delete(`${this.baseUrl}/${key}.json`).subscribe(res=>{
      this.getList();
    })
  }
  getList(){
    console.log("iam called");
    
    this.http.get(`${this.baseUrl}.json`).subscribe((data: any) => {
      this.listItems = [];
      if (data) {
        this.listItems = Object.keys(data).map((key: any) => {
          data[key].id = key;
          this.listItems=data[key];
          return data[key];
        });
        this.list.next(this.listItems)
      }
    });
  }

  
}

export interface Todo{
  id:Optional;
  taskName:String;
  taskDescription:String;
  taskCategory:String;
  status:status;
  createdAt:Date;
  userEmail:Optional;
}

export enum status{
  Pending='pending',
  Completed='completed'
}