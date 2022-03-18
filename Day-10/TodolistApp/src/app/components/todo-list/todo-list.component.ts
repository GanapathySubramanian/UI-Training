import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Todo, TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class 
TodoListComponent implements OnInit {

  
  list:Todo[]=[];
  category:any="";
  total:number=0;
  pending:number=0;
  completed:number=0;

  constructor(private todo:TodoService,private route: ActivatedRoute) { 
    this.getlist();
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('id');
    })
    
  }
  
  ngOnInit(): void {
    this.todo.getList();
  }

   getlist() {
    this.todo.list.subscribe(data=>{
      // this.calculateCount(data)
      this.list=data;
     
    })
  }
  // calculateCount(lists: Todo[]) {
    
  //   for(let i=0;i<lists.length;i++){
  //     if(lists[i].taskCategory==this.category){
  //       console.log(lists[i].taskName);
  //       this.total=+1;

  //       if(lists[i].status=='pending'){
  //           this.pending=+1;
  //       }
  //       if(lists[i].status=='completed'){
  //         this.completed=+1;
  //       }
  //     }
      
  //   }
  // }

  topending(id:any){
    this.todo.topending(id);
  }
  toCompleted(id:any){
    this.todo.tocompleted(id);
  }
    remove(id:any){
    this.todo.remove(id);
  }

  
}
