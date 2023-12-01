import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  @Input()   data:any;
  @Output() btnResponse =new EventEmitter<any>();;
  constructor(private fb: FormBuilder) { }
  output = new Subject();
  ngOnInit(): void {
    this.formdata.patchValue(this.data)
  }

  formdata=this.fb.group({
    price: ['', [Validators.required, Validators.minLength(5)]],
    tds:['',[Validators.required]]
  })
  clickEvent(Event:any){
    if(this.formdata.valid && Event.name=="next"){
Event.data=this.formdata.value
      this.btnResponse.emit(Event)
    }else if(Event.name=="previous"){
      this.btnResponse.emit(Event)
    }
    else{
      Event.name="error"
      this.btnResponse.emit(Event)
    }
  }
}
