import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Btnres } from '../btnres';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

@Output() btnresponse=new EventEmitter<Btnres>();
  constructor() { }

  ngOnInit(): void {
  }
  previous(){
   const click:Btnres={
name:"previous",
data:{}
    }
this.btnresponse.emit(click)
  }
  next(){
    const click:Btnres={
      name:"next",
      data:{}
          }
      this.btnresponse.emit(click)
  }
}
