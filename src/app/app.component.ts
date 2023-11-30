import { Component } from '@angular/core';
import { AddStepItem } from './addStep';
import {IProduct} from './product.model'
import { PersonalinfoComponent } from './processcomponents/personalinfo/personalinfo.component';
import { BillingComponent } from './processcomponents/billing/billing.component';
import { ConsentComponent } from './processcomponents/consent/consent.component';
import { TermsandconditionsComponent } from './processcomponents/termsandconditions/termsandconditions.component';
import { ReviewComponent } from './processcomponents/review/review.component';

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
    {
      component: ConsentComponent,
       
       data:[]
     },{
      component: TermsandconditionsComponent,
       
       data:[]
     },{
      component: ReviewComponent,
       
       data:[]
     },
  
  ];
  constructor(){
    
  }
 
}
