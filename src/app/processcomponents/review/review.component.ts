import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {


  @Input() data = new EventEmitter<any>();
  @Output() btnResponse = new EventEmitter<any>();;
  submitString="submit"
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formdata.patchValue(this.data)
  }
  formdata = this.fb.group({

  });
  submit(){

    console.log("submit")
       }
  clickEvent(Event: any) {
    if (this.formdata.valid && Event.name == "next") {
      Event.data = this.formdata.value
      this.btnResponse.emit(Event)
    } else if (Event.name == "previous") {
      this.btnResponse.emit(Event)
    }
    else {
      Event.name = "error"
      this.btnResponse.emit(Event)
    }
  }

}
