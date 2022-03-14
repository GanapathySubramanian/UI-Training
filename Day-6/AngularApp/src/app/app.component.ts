import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toaster-not';
   
  constructor(private toastr: ToastrService) { }
   
  Success(){
    this.toastr.success("Success Toaster !!!", "This is Success")
  }
   
  Error(){
    this.toastr.error("Error Toaster !!!", "This is Error")
  }
   
  Info(){
    this.toastr.info("Info Toaster !!!", "This is info")
  }
   
  Warning(){
    this.toastr.warning("Warning Toaster !!!", "This is warning")
  }
}