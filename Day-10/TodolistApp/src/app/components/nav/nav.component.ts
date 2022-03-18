import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  category:String[]=['Movies','Sports','Travels','Studies','Others']
  @Input('total') totalTaskCount:number=0;
  @Input('pending') pendingTaskCount:number=0;
  @Input('completed')completedTaskCount:number=0;
  @Input('Authenticated')auth:boolean=false;
  
  list:any[]=[];
  
  constructor(private todo:TodoService) {
    this.getCategory();
    this.getlist();
   }
 
  getCategory() {
    this.todo.getCategoryList().subscribe((data)=>{
      this.category=data;
    })
  }

  getlist() {
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

 
  ngOnInit(): void {
    // this.getTaskCounts();    
  }



 
}
