import { Directive, EventEmitter, Output, Type } from '@angular/core';


@Directive()
export class AddStepItem {

  @Output() hideTab = new EventEmitter();
  @Output() showHeader = new EventEmitter();
  @Output() formdata:any[]=[]
  isHide: boolean;
  isDisable: boolean;
  @Output() data:any[]=[]
  constructor(public component:any, public datas?: any) {
    this.isHide = false;
    this.isDisable = false;
  }
}
