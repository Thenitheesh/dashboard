import { Component } from '@angular/core';
import { AddStepItem } from './addStep';
import { PersonalinfoComponent } from './processcomponents/personalinfo/personalinfo.component';
import { BillingComponent } from './processcomponents/billing/billing.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  // steps: AddStepItem[]=[];

  steps: AddStepItem[] = [
    {
      title: 'Tab 1',
      component: PersonalinfoComponent,
      isDisable:false,
      isHide:false,
   data:[]
          },
    {
      title: 'Tab 2',
      component: BillingComponent,
      isDisable:false,
      isHide:false,
      data:[]
    },
  
  ];
  constructor(){
    
  }
 
}
