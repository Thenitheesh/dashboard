import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepsComponent } from './processcomponents/steps/steps.component';
import { PersonalinfoComponent } from './processcomponents/personalinfo/personalinfo.component';
import { ProcessDirective } from './process.directive';
import { DashboardGroupComponent } from './dashboard-group/dashboard-group.component';
import { BillingComponent } from './processcomponents/billing/billing.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    PersonalinfoComponent,
    ProcessDirective,
    DashboardGroupComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
