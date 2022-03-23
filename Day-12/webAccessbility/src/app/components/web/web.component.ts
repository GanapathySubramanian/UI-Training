import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {

  fontSize="16px";
  constructor() { }

  ngOnInit(): void {
  }



  

  increaseText() {
    let size = parseInt(this.fontSize.substring(0, this.fontSize.length - 2)) + 2;
    this.fontSize=size+'px';
    document.querySelectorAll('label')[0].style.fontSize=size+'px';
    document.querySelectorAll('label')[1].style.fontSize=size+'px';
    console.log(size);
    
  }

  decreaseText() {
    let size = parseInt(this.fontSize.substring(0, this.fontSize.length - 2)) - 2;
    this.fontSize=size+'px';
    document.getElementsByTagName('label')[0].style.fontSize = size + 'px';
    document.getElementsByTagName('label')[1].style.fontSize = size + 'px';
  }


}
