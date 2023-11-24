import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PersonalinfoComponent } from '../processcomponents/personalinfo/personalinfo.component';
import { BillingComponent } from '../processcomponents/billing/billing.component';
import { StepsComponent } from '../processcomponents/steps/steps.component';
import { AddStepItem } from '../addStep';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-dashboard-group',
  templateUrl: './dashboard-group.component.html',
  styleUrls: ['./dashboard-group.component.scss'],
})
export class DashboardGroupComponent implements OnInit {
  @Input() steppers: IProduct[] = [];
  @ViewChild('processview',{read:ViewContainerRef,static:true}) viewRef: any;
  componentRef:any
  firstIndex = 0;
  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  public components = [PersonalinfoComponent, BillingComponent];
  names: string[] = [
    'personal details',
    'consent',
    'billing',
    'terms and conditions',
    'confirmation',
  ];
  ngOnInit(): void {
    if (this.firstIndex == 0) {
      this.loadprocess(this.steppers[this.firstIndex]);
    }
    // var myName = this.text.nativeElement.value;
    // console.log(myName);
  }
  nextStep: any = this.components[0];
  i = 0;
  submitRequest!: any;
  event = new EventEmitter();

  loadprocess(prop: any) {
    this.viewRef.clear();
    // console.log("hehe")
         const currentcomponent=new AddStepItem(prop.component,prop.data)
    const componentmain = this.componentFactoryResolver.resolveComponentFactory(
      prop.component
    );

    this.componentRef = this.viewRef.createComponent(componentmain);
    console.log(this.componentRef.data)
    if(this.componentRef.instance as AddStepItem) {
      console.log("hehe")
    }
    // console.log( this.componentRef.instance.inputdata)
    (this.componentRef.instance as AddStepItem).data =prop.data;
    this.componentRef.instance.btnResponse.subscribe((val: any) =>{
     console.log(val)

    this.componentRef.data=val
  console.log("hi") }
    );
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
    console.log(this.firstIndex);
    if (this.firstIndex >= 0) {
      this.firstIndex++;

      this.loadprocess(this.steppers[this.firstIndex]);
      // this.loadproceess (thi.stepa kkfkiiiiif)
    }
  }
  pre() {
    if (this.firstIndex >= 0) {
      this.firstIndex--;
      if (this.firstIndex == 0 || this.firstIndex == -1) {
        this.firstIndex = 0;
      }
      this.loadprocess(this.steppers[this.firstIndex]);
      
    }
    //   if (this.i > 0) {
    //     this.i--;
    //     console.log(this.i, this.components.length);
    //     this.nextStep = this.components[this.i];
    //   }
  }

  onButtonClick(): void {
    
  }
}

