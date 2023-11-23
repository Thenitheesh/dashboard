import { Component } from '@angular/core';
import { AddStepItem } from './addStep';
import {IProduct} from './product.model'
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

  steps: IProduct[] = [
    {
    
      component: PersonalinfoComponent,
   
   data:[{name:"personal info componnet"}]
          },
    {
     component: BillingComponent,
      
      data:[]
    },
  
  ];
  constructor(){
    
  }
 
}
