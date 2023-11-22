import { Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, ViewContainerRef } from '@angular/core';
import { PersonalinfoComponent } from '../processcomponents/personalinfo/personalinfo.component';
import { BillingComponent } from '../processcomponents/billing/billing.component';
import { StepsComponent } from '../processcomponents/steps/steps.component';
import { AddStepItem } from '../addStep';

@Component({
  selector: 'app-dashboard-group',
  templateUrl: './dashboard-group.component.html',
  styleUrls: ['./dashboard-group.component.scss'],
})
export class DashboardGroupComponent implements OnInit {
  @Input() steppers: AddStepItem[] = [];
firstIndex=0
  constructor(  public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {}
  public components = [PersonalinfoComponent, BillingComponent];
  names: string[] = [
    'personal details',
    'consent',
    'billing',
    'terms and conditions',
    'confirmation',
  ];
  componentRef:any
  ngOnInit(): void {
if(this.firstIndex==0){

this.loadprocess(this.steppers[this.firstIndex])
}
  }
  nextStep: any = this.components[0];
  i = 0;
  submitRequest!: any;
  event = new EventEmitter();



  loadprocess(prop: any) {
    this.viewContainerRef.clear()
    // console.log("hehe")
    const componentmain =
      this.componentFactoryResolver.resolveComponentFactory(prop.component);

    this.componentRef = this.viewContainerRef.createComponent(componentmain);
    this.componentRef.instance.inputdata =prop.data
    // console.log( this.componentRef.instance.inputdata )
    // (this.componentRef.instance as AddStepItem).data =data;
    // console.log(this.stepsItems[this.i].component == componentmain)
  }
  next() {
    // if (this.i < this.components.length - 1) {
    //   this.i++;
    //   console.log(this.i, this.components.length);
    //   this.nextStep = this.components[this.i];
    // }
    // this.submitRequest = this.event.emit;
    // this.steppers.push(new AddStepItem(BillingComponent,{name:"BillingComponent"}))
    this.firstIndex++
    this.loadprocess(this.steppers[this.firstIndex])
     this.componentRef.instance.output.subscribe((results: any) => {
      console.log(results)
     })
  }
  pre() {
    this.firstIndex--
    this.loadprocess(this.steppers[this.firstIndex])
    this.componentRef.instance.output.subscribe((results: any) => {
      console.log(results)
     })
  //   if (this.i > 0) {
  //     this.i--;
  //     console.log(this.i, this.components.length);
  //     this.nextStep = this.components[this.i];
  //   }
  }
}
