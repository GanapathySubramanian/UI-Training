import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ConfirmedValidator } from 'src/app/validators/confirmed.validator';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupFormGroup!:FormGroup;
  storage:Storage=localStorage;
  constructor(private formbuilder:FormBuilder,private auth:AuthenticationService,private toastr:ToastrService,private router:Router ) { }

  
  ngOnInit(): void {
    this.signupFormGroup=this.formbuilder.group({
      Name: new FormControl('',[Validators.required,Validators.minLength(4)]),
      Email:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      Password:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$')]),
      confirmPassword:new FormControl('',[Validators.required])      
    },
    {
      validator: ConfirmedValidator('Password', 'confirmPassword')
    })
  }


  saveUser(){
    let name=this.signupFormGroup.controls['Name'].value;
    let email=this.signupFormGroup.controls['Email'].value;
    let pass=this.signupFormGroup.controls['Password'].value;
    if(this.signupFormGroup.invalid){
      this.signupFormGroup.markAllAsTouched();
      return;
    }else{
    this.auth.signUp(name,email,pass).pipe(

    ).subscribe(()=>{
      this.toastr.success("Registration Successfull");
      this.router.navigate(['/addtask'])
    });
    
    }
  }
}
