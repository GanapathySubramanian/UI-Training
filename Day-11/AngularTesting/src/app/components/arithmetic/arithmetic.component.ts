import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arithmetic',
  templateUrl: './arithmetic.component.html',
  styleUrls: ['./arithmetic.component.css']
})
export class ArithmeticComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public static sum(a:number,b:number){
    return a+b;
  }


}
