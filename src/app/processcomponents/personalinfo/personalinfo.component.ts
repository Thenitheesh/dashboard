import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { FormdataService } from 'src/app/formdata.service';
import { btnclick } from 'src/app/product.model';
@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.scss'],
})
export class PersonalinfoComponent implements OnInit {
  @Input() inputdata: any;
  @Input() data:any
  @Output() btnResponse =new EventEmitter<any>();;
  constructor(
    private fb: FormBuilder,
    private formDataService: FormdataService
  ) {}
  stateData: any;
  ngOnInit(): void {
    this.stateData = this.formDataService.getState();
    // this.data.get("name")?.patchValue(this.stateData.value?.name)
    // this.data.get('name')?.patchValue(this.inputdata.formData?.value);
    // console.log(this.inputdata.formData?.value);
    console.log(this.data)
  }
  output = new Subject();
  ngOnDestroy() {
    // console.log(this.data)
    // this.hello();
    // this.inputdata.data=this.data.value
    //  this.output.next(this.data.value)
    //  console.log(this.inputdata)
  }
  formdata = this.fb.group({
    FirstName: ['', [Validators.required, Validators.minLength(5)]],
    lastName: ['', [Validators.required, Validators.minLength(5)]]
  });
  sendData(){
    this.btnResponse.emit(this.formdata)
  }
  hello() {
    console.log('hello world');
    // this.newItemEvent.emit(this.data.value);
    // this.output.next(this.data)
  }

}
