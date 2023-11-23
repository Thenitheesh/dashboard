import { Directive, EventEmitter, Output, Type } from '@angular/core';


@Directive()
export class AddStepItem {

  @Output() btnclick = new EventEmitter();
  // @Output() showHeader = new EventEmitter();
  // @Output() formdata:any[]=[]
  isHide: boolean;
  isDisable: boolean;
  title!: string;
  constructor(public component:any, public data?: any) {
    this.isHide = false;
    this.isDisable = false;
  }
}
