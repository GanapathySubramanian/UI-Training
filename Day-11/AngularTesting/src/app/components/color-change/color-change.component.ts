import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.component.html',
  styleUrls: ['./color-change.component.css']
})
export class ColorChangeComponent implements OnInit {

  isGreenBackground:Boolean=false;
  static color: string;
  constructor() { }

  ngOnInit(): void {
  }

  changeToRed(){
    this.isGreenBackground=false;
  }

  changeToGreen(){
    this.isGreenBackground=true;
  }
}
