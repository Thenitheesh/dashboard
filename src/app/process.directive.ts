import {
  ComponentFactoryResolver,
  Directive,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import { FormdataService } from './formdata.service';
import { AddStepItem } from './addStep';

@Directive({
  selector: '[appProcess]',
})
export class ProcessDirective {
  @Input() processStep: any;
  @Input()
  submitEvent: any;
  @Input() stepsItems:AddStepItem[]=[]
  @Input() i:any=0
  @Output() public onChange = new EventEmitter();
  receivedData: any;

  

  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    public formdata: FormdataService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.viewContainerRef.clear();
    this.loadprocess(this.processStep);
   
    //  console.log(this.formdata.getState())
    // console.log(this.submitEvent);

    this.sendData(this.componentRef);
  }
  ngAfterViewInit() {
    // this.sendData(this.componentRef)
  }
  // ngOnDestroy(){
  //   this.sendData(this.componentRef)
  // }
  componentRef: any;
  loadprocess(prop: any) {
    // console.log("hehe")
    const componentmain =
      this.componentFactoryResolver.resolveComponentFactory(prop);

    this.componentRef = this.viewContainerRef.createComponent(componentmain);
    this.componentRef.instance.inputdata =this.stepsItems[this.i]
    // console.log( this.componentRef.instance.inputdata )
    // (this.componentRef.instance as AddStepItem).data =data;
    // console.log(this.stepsItems[this.i].component == componentmain)
  }

  sendData(componentRef: any) {
    return this.componentRef.instance.output.subscribe((results: any) => {
      this.receivedData = results;
      if(this.i==0){
    this.stepsItems[this.i]=results
console.log( this.stepsItems[this.i])
console.log(this.i)}else{
  this.stepsItems[this.i-1]=results
  console.log( this.stepsItems[this.i-1])
  console.log(this.i-1)
}
    // this.formdata.setState(results);
    });
  }
}
