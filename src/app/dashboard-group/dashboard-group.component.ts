import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { PersonalinfoComponent } from '../processcomponents/personalinfo/personalinfo.component';
import { BillingComponent } from '../processcomponents/billing/billing.component';
import { StepsComponent } from '../processcomponents/steps/steps.component';
import { AddStepItem } from '../addStep';

@Component({
  selector: 'app-dashboard-group',
  templateUrl: './dashboard-group.component.html',
  styleUrls: ['./dashboard-group.component.scss']
})
export class DashboardGroupComponent implements OnInit {

  constructor() {  this.steppers.push(new AddStepItem(PersonalinfoComponent,{name:"PersonalinfoComponent"}))
  this.steppers.push(new AddStepItem(BillingComponent,{name:"BillingComponent"}))}
  @Input() steppers: AddStepItem[] = [];
  public components=[PersonalinfoComponent,BillingComponent]
  names: string[] = ["personal details","consent","billing","terms and conditions","confirmation"];
  ngOnInit(): void {
  }
  nextStep:any=this.components[0]
  i=0
  submitRequest!: any;
  event = new EventEmitter();
  
  next(){
  if(this.i<this.components.length-1){
    this.i++
    console.log(this.i,this.components.length)
    this.nextStep=this.components[this.i]}
    this.submitRequest=this.event.emit
    // this.steppers.push(new AddStepItem(BillingComponent,{name:"BillingComponent"}))

  }
  pre(){
    
    if(this.i>0){
      this.i--
    console.log(this.i,this.components.length)
  this.nextStep=this.components[this.i]}
}

addItem(event: any){
  console.log(event.target)
}
}
function next() {
  throw new Error('Function not implemented.');
}

