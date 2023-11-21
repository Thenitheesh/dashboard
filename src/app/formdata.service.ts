import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {
  formData: any;
  constructor() {     this.formData = {};}
  public state: object = {}; 
  getState() { 
    return this.state; 
  } 
  setState(data: object) { 
    this.state = data; 
   
  } 
}
