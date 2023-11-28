import { Component, Input, OnInit } from '@angular/core';
import { IStepper } from 'src/app/dashboard-group/dasnboard.model';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  
  @Input() substeps: IStepper[] = [];
  
  constructor() { }
  ngOnInit(): void {
    console.log(this.substeps)
  }

}
