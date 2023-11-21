import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { FormdataService } from 'src/app/formdata.service';
@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.scss']
})
export class PersonalinfoComponent implements OnInit {
  @Input() inputdata:any
  constructor(   private fb: FormBuilder,private formDataService: FormdataService) { }
  @Output() newItemEvent = new EventEmitter();
  stateData:any
  ngOnInit(): void {
    this.stateData=this.formDataService.getState()
    // this.data.get("name")?.patchValue(this.stateData.value?.name)
    this.data.get("name")?.patchValue(this.inputdata.formData?.value)
    console.log(this.inputdata.formData?.value)
  }
  output = new Subject();
  ngOnDestroy(){
    // console.log(this.data)
    // this.hello();
    this.inputdata.formData=this.data
       this.output.next(this.inputdata)
      //  console.log(this.inputdata)
  }
  data=this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
  })

   hello() {
    console.log("hello world")
    // this.newItemEvent.emit(this.data.value);
    // this.output.next(this.data)
    
  }
}
