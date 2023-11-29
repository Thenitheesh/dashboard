import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})
export class ConsentComponent implements OnInit {
  @Output() btnResponse =new EventEmitter<any>();;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  formdata = this.fb.group({
   
  });
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
