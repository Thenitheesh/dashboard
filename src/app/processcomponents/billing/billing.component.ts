import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  output = new Subject();
  ngOnInit(): void {
  }
  ngOnDestroy(){
    // console.log(this.data)
    // this.hello();
       this.output.next(this.data)
  }
  data=this.fb.group({
    price: ['', [Validators.required, Validators.minLength(5)]],
  })
}
