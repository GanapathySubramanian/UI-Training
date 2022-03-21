import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-sigin-in',
  templateUrl: './sigin-in.component.html',
  styleUrls: ['./sigin-in.component.css']
})
export class SiginInComponent implements OnInit {

  constructor(private authservice:AuthenticationService,private todo:TodoService,private router:Router,private toastr:ToastrService) { }
  email:string='';
  password:string='';
  loginIn(signInForm:NgForm){
    console.log(signInForm.value);
      this.authservice.login(this.email,this.password).subscribe((res)=>{
      this.toastr.success("LogIn Successfull")
        this.router.navigate(['/addtask'])
    });
  }
  ngOnInit(): void {
  }

}
