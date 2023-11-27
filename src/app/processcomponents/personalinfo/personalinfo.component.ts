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
    this.formdata.get('FirstName')?.patchValue(this.data?.FirstName);
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
  // pre(){
  //   if(this.formdata.valid){
  //   this.btnResponse.emit(this.formdata)}
  // }
  // next(){
  //   if(this.formdata.valid){
  //     this.btnResponse.emit(this.formdata)}
  // }
  clickEvent(Event:any){
    if(this.formdata.valid){
Event.data=this.formdata.value
      this.btnResponse.emit(Event)
    }else{
      Event.name="error"
      this.btnResponse.emit(Event)
    }
  }
  }
  // hello() {
  //   console.log('hello world');
  //   // this.newItemEvent.emit(this.data.value);
  //   // this.output.next(this.data)
  // }

